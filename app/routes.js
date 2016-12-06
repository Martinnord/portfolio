// Require express
var express = require('express');
var path    = require('path');
// Create our router object
var router = express.Router();
// Route to Homepage
router.get('/', function(req, res){
  res.render('index');
});
// Export router
module.exports = router;
