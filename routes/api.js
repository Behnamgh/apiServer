var express = require('express');
var app = require('../app.js')
var device = './device_creator.js';

/* GET home page. */
app.get('/', function (req, res, next) {
    device.create();
    res.send('end');
});
app.get('/list', function (req, res, next) {
    console.log('ok');
  device.listshow().then(res=>{
       console.log(res);
       res.send('end');
   })
});
app.post('/list', function (req, res, next) {
    console.log('ok');
  device.listshow().then(res=>{
       console.log(res);
       res.send('end');
   })
});

module.exports = router;
