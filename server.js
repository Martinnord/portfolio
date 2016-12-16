var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var app = express();
var mongoose = require('mongoose');
var port = 8080;

var db = mongoose.connect('mongodb://localhost/martinnord');

// Make our db accessible to our router
app.use(function(req, res, next) {
  req.db = db;
  next();
});

const publicdir = __dirname + '/public/';
const viewdir = __dirname + '/views/';

// Route our app
var router = require('./app/routes');

app.use(bodyParser.json()); // Support JSON Encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // Support encoded bodies
// Set static files (CSS, Images)
app.use(express.static(publicdir));

app.use('/', router);
// Use handlebars
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine',  'handlebars');

// Start the server
app.listen(8080, function(){
  console.log("SWEET");
});
