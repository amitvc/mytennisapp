'use strict';
var express = require('express');
var profileRoutes = express.Router();

profileRoutes.post("/add", function (req, res) {
   console.log(req);

   res.send("Nothing to do");
});

profileRoutes.get("/all", function (req, res) {
    var profile = function(name, promotion) {
        this.name = name;
        this.promotion = promotion;
    }
    
    var p3 = [new profile('amit', 'promo1'),new profile('jaime', 'promo2'), new profile('george', 'promo10')];
    res.send(p3);
});

module.exports = profileRoutes;