const { HoldingsModel } = require("../model/HoldingModel.js");

module.exports.index = async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
};