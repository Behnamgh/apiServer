var express = require('express');
var app = require('../app.js')
var device = './device_creator.js';

/* GET home page. */
app.get('/', function (req, res, next) {
    device.create();
    res.send('end');
});

module.exports = router;
