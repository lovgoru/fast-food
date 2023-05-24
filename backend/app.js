const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const foodRoutes = require("./routes/foodRoutes");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://fast-food-8a0f.onrender.com"],
  })
);

// routes
app.use("/api/foods", foodRoutes);

// connecting to mongoDB database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database");
    let port = 8080;
    app.listen(port, () => {
      console.log("Listening on port " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
