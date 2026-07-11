const { model } = require("mongoose");

const { OrderSchema } = require("../schemas/OrdersSchema");

const OrderModel = model("Order", OrderSchema);

module.exports = { OrderModel };
