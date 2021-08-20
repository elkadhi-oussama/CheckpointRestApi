const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let result = await mongoose.connect("mongodb://localhost:27017/mernF3", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database is running");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
