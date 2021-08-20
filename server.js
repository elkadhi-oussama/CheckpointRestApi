//import express
const express = require("express");

//initilation
const app = express();

//import dotenv
require("dotenv").config();

//import database
const connectDB = require("./config/connectDB");

//run database
connectDB();
//convert JSON
app.use(express.json());

app.use("/contact", require("./routes/contactRoute"));


app.listen(process.env.PORT, (err) =>
  err ? console.log(err) : console.log("server is running")
);
