// Require express
var express = require('express');
var path    = require('path');

// Create our router object
var router = express.Router();

// Route to Homepage
router.get('/', function(req, res){
  res.render('index');
});

// Route to About,
router.get('/about', function(req, res){
  res.send('About here!');
});

// Route to contact
router.post('/contact', function(req, res) {
});

// Export router
module.exports = router;
