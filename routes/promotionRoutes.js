'use strict';
var express = require('express');

var promotionRoutes = express.Router();

promotionRoutes.post("/add", function (req, res) {
   res.send("Promotion added");
});

promotionRoutes.get("/", function (req, res) {
    res.send("Dont have any promotions yet");
});

module.exports = promotionRoutes;