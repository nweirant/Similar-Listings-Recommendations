const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/homes");
//talal:shadie12@172.31.85.145

const db = mongoose.connection;

//mongoose.Promise = Promise;
db.on("error", (err) => {
  console.log("connection err");
});

db.once("open", () => {
  console.log("MongoDB connected!");
});

module.exports = db;
