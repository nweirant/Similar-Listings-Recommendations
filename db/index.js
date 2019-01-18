const mongoose = require("mongoose");

mongoose.connect(`mongodb://talal:shadie12@54.175.166.47/homes`);
const db = mongoose.connection;

//mongoose.Promise = Promise;
db.on("error", (err) => {
  console.log("connection err");
});

db.once("open", () => {
  console.log("MongoDB connected!");
});

module.exports = db;
