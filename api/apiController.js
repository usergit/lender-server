"use strict";
const express = require('express'),
      bodyParser = require('body-parser'),
      basicauth = require('basicauth-middleware');

const router = express.Router();

const sanitizer = (req, res, next) => {
    // I would sanitize input here, using express-validator
    next()
};

const validator = (req, res, next) => {
    // I would validate input here, using express-validator and I would use a some sort of schema
    next()
};

const jsonParser = bodyParser.json();

// // arrow #6 on the pdf, for now I used a shared secret and basic auth, all fields hardcoded
router.post('/lenderEndPoint', basicauth('nova', 'novaPassword'), sanitizer, validator, jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);

    console.log("req.body: ", req.body);
    res.send("data successfully posted")
});

module.exports = router;