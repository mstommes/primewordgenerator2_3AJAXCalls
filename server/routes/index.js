var express = require('express');
var router = express.Router();//Router has to be capitalized
var path = require('path');
var firstAdj = require('../public/data/adj1.json');
var secondAdj = require('../public/data/adj2.json');
var noun = require('../public/data/noun.json');

router.get("/adj1", function(req, res){
    res.json(firstAdj);
});

router.get("/adj2", function(req, res){
    res.json(secondAdj);
});

router.get("/noun", function(req, res){
    res.json(noun);
});

router.get("/*", function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;