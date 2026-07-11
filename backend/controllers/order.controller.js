const { OrderModel } = require("../model/OrdersModel");
const { HoldingsModel } = require("../model/HoldingsModel");
const { StockModel } = require("../model/StockModel");
const { FundsModel } = require("../model/FundsModel");
const { TransactionModel } = require("../model/TransactionModel");

const buyStock = async (req, res) => {
  try {
    const { symbol, quantity } = req.body;

    // Validation
    if (!symbol || !quantity) {
      return res.status(400).json({
        message: "Symbol and quantity are required",
      });
    }

    if (quantity <= 0) {
      return res.status(400).json({
        message: "Quantity must be greater than zero",
      });
    }

    // Find stock from Stocks collection
    const stock = await StockModel.findOne({
      symbol: symbol.toUpperCase(),
    });
    const funds = await FundsModel.findOne({
      user: req.user.id,
    });

    if (!stock) {
      return res.status(404).json({
        message: "Stock not found",
      });
    }

    // Total Amount
    const totalAmount = stock.price * quantity;
    if (funds.availableBalance < totalAmount) {
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }
    // Create Order
    const order = await OrderModel.create({
      user: req.user.id,
      symbol: stock.symbol,
      companyName: stock.companyName,
      exchange: stock.exchange,
      type: "BUY",
      quantity,
      price: stock.price,
      totalAmount,
      status: "COMPLETED",
    });

    await TransactionModel.create({
      user: req.user.id,
      type: "BUY",
      symbol: stock.symbol,
      quantity,
      amount: totalAmount,
      description: `Bought ${quantity} shares of ${stock.symbol}`,
    });
    // Check Holding
    let holding = await HoldingsModel.findOne({
      user: req.user.id,
      name: stock.symbol,
    });

    if (holding) {
      // Calculate new average price
      const totalQty = holding.qty + quantity;

      const totalInvestment =
        holding.avg * holding.qty + stock.price * quantity;

      holding.avg = totalInvestment / totalQty;
      holding.qty = totalQty;
      holding.price = stock.price;

      await holding.save();
    } else {
      // Create Holding
      await HoldingsModel.create({
        user: req.user.id,
        name: stock.symbol,
        qty: quantity,
        avg: stock.price,
        price: stock.price,
        net: "0%",
        day: `${stock.changePercent}%`,
      });
    }
    funds.availableBalance -= totalAmount;

    funds.usedMargin += totalAmount;

    await funds.save();
    res.status(201).json({
      message: "Stock purchased successfully",
      order,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const sellStock = async (req, res) => {
  try {
    const { symbol, quantity } = req.body;

    if (!symbol || !quantity) {
      return res.status(400).json({
        message: "Symbol and quantity are required",
      });
    }

    // Find Holding
    const holding = await HoldingsModel.findOne({
      user: req.user.id,
      name: symbol.toUpperCase(),
    });

    if (!holding) {
      return res.status(404).json({
        message: "You don't own this stock",
      });
    }

    if (holding.qty < quantity) {
      return res.status(400).json({
        message: "Insufficient quantity",
      });
    }

    // Find Stock
    const stock = await StockModel.findOne({
      symbol: symbol.toUpperCase(),
    });

    if (!stock) {
      return res.status(404).json({
        message: "Stock not found",
      });
    }

    // Find User Funds
    const funds = await FundsModel.findOne({
      user: req.user.id,
    });

    if (!funds) {
      return res.status(404).json({
        message: "Funds account not found",
      });
    }

    const totalAmount = quantity * stock.price;

    // Create Sell Order
    const order = await OrderModel.create({
      user: req.user.id,
      symbol: stock.symbol,
      companyName: stock.companyName,
      exchange: stock.exchange,
      type: "SELL",
      quantity,
      price: stock.price,
      totalAmount,
      status: "COMPLETED",
    });
    await TransactionModel.create({
      user: req.user.id,
      type: "SELL",
      symbol: stock.symbol,
      quantity,
      amount: quantity * stock.price,
      description: `Sold ${quantity} shares of ${stock.symbol}`,
    });
    // Update Holding
    holding.qty -= quantity;
    holding.price = stock.price;

    if (holding.qty === 0) {
      await holding.deleteOne();
    } else {
      await holding.save();
    }

    // ==========================
    // Update User Funds
    // ==========================

    funds.availableBalance += totalAmount;
    funds.usedMargin -= totalAmount;

    // Prevent negative used margin
    if (funds.usedMargin < 0) {
      funds.usedMargin = 0;
    }

    await funds.save();

    res.status(200).json({
      message: "Stock sold successfully",
      order,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = {
  buyStock,
  sellStock,
  getOrders,
};
