const mongoose = require("mongoose");
require("dotenv").config();

const { StockModel } = require("../model/StockModel");

const stocks = [
  {
    symbol: "INFY",
    companyName: "Infosys Ltd.",
    exchange: "NSE",
    price: 1555.45,
    changePercent: -1.6,
    isDown: true,
  },
  {
    symbol: "ONGC",
    companyName: "Oil and Natural Gas Corporation",
    exchange: "NSE",
    price: 116.8,
    changePercent: -0.09,
    isDown: true,
  },
  {
    symbol: "TCS",
    companyName: "Tata Consultancy Services",
    exchange: "NSE",
    price: 3194.8,
    changePercent: -0.25,
    isDown: true,
  },
  {
    symbol: "KPITTECH",
    companyName: "KPIT Technologies",
    exchange: "NSE",
    price: 266.45,
    changePercent: 3.54,
    isDown: false,
  },
  {
    symbol: "QUICKHEAL",
    companyName: "Quick Heal Technologies",
    exchange: "NSE",
    price: 308.55,
    changePercent: -0.15,
    isDown: true,
  },
  {
    symbol: "WIPRO",
    companyName: "Wipro Ltd.",
    exchange: "NSE",
    price: 577.75,
    changePercent: 0.32,
    isDown: false,
  },
  {
    symbol: "M&M",
    companyName: "Mahindra & Mahindra",
    exchange: "NSE",
    price: 779.8,
    changePercent: -0.01,
    isDown: true,
  },
  {
    symbol: "RELIANCE",
    companyName: "Reliance Industries",
    exchange: "NSE",
    price: 2112.4,
    changePercent: 1.44,
    isDown: false,
  },
  {
    symbol: "HUL",
    companyName: "Hindustan Unilever",
    exchange: "NSE",
    price: 512.4,
    changePercent: 1.04,
    isDown: false,
  },
];

async function seedStocks() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    await StockModel.deleteMany();

    await StockModel.insertMany(stocks);

    console.log("✅ Stocks inserted successfully");

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

seedStocks();
