const { model } = require("mongoose");
const { FundsSchema } = require("../schemas/FundsSchema");

const FundsModel = model("Fund", FundsSchema);

module.exports = { FundsModel };
