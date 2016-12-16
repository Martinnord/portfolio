// Require express
var express = require('express');
var path    = require('path');
var User = require('./models/User');
var Contact = require('./models/Contact');
// Create our router object
var router = express.Router();
// Route to Homepage
router.get('/', function(req, res){
  res.render('index');
});

router.get('/contact', function(req, res){
  res.render('form');
});

router.post('/contact-form', function(req, res, next){
  var data = req.body;
  console.log(data);

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  var newContact = new Contact({
    name: name,
    email: email,
    message: message
  });

  newContact.save(function(err){
    if (err) throw err;
  });

  res.redirect('/');

});



// Export router
module.exports = router;
