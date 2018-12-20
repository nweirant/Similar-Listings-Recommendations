const express = require("express");
const routeHandlers = require("./controllers/homeControllers.js");
const router = express.Router();

router.get("/api/items/:id", routeHandlers.retrieveOne);

module.exports = router;
