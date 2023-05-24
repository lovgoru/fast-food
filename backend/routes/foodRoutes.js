const express = require("express");
const { getAllSpecials, getAllFood } = require("../controllers/foodController");

const router = express.Router();

router.get("/", getAllFood);
router.get("/specials", getAllSpecials);

module.exports = router;
