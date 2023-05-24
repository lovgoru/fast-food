const Food = require("../models/food");

const getAllFood = async (req, res) => {
  const foods = await Food.find();
  res.status(200).json(foods);
};

const getAllSpecials = async (req, res) => {
  const specials = await Food.find({ special: true });
  res.status(200).json(specials);
};

module.exports = {
  getAllSpecials,
  getAllFood,
};
