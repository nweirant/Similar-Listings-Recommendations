const mongoose = require("mongoose");

mongoose.connect("mongodb://ec2-18-206-61-102.compute-1.amazonaws.com/homes");

const db = mongoose.connection;

mongoose.Promise = Promise;
db.on("error", () => {
  console.log("connection err");
});

db.once("open", () => {
  console.log("MongoDB connected!");
});

module.exports = db;
