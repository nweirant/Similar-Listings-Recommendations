const express = require("express");
const helpers = require("../helpers/helpers.js");
const router = express.Router();

router.get("/api/items/:id");

module.exports = router;
