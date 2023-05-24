const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
  },
  img_name: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  special: {
    type: Boolean,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
