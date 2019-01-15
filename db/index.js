const mongoose = require("mongoose");

mongoose.connect("mongodb://52.90.32.236/homes", (err) => {
  if (err) {
    console.log(err);
  }
});

const db = mongoose.connection;

mongoose.Promise = Promise;
db.on("error", () => {
  console.log("connection err");
});

db.once("open", () => {
  console.log("MongoDB connected!");
});

module.exports = db;
