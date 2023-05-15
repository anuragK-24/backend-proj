require("dotenv").config(); // load all the environment variable from dotenv
const mongoose = require("mongoose");
const DATA = process.env.DB_URI;

const connectDB = async () => {
  // when we use the async we should do it in the try catch block.
  try {
    await mongoose.connect(DATA);
    console.log("Database connected");
  } catch (error) {
    console.log("Error while connecting", error.message);
  }
};

module.exports = connectDB;
