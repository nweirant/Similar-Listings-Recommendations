const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/homes");

const db = mongoose.connection;

mongoose.Promise = Promise;
db.on("error", () => {
  console.log("connection err");
});

db.once("open", () => {
  console.log("MongoDB connected!");
});

module.exports = db;
