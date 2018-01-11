var express = require('express');
var port = process.env.PORT || 3000;
var path = require('path');
var flash = require("connect-flash");
var session = require("express-session");
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


require('./routes/routes')(app);


app.listen(port, function (req, res) {
  console.log('is listening on: ' + port);
});
// app.listen(port);
// console.log("The Server runs on " + port);
