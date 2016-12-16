var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactInfo = new Schema({

  name: String,
  email: String,
  message: String

});

var Contact = mongoose.model('Contact', contactInfo);

module.exports = Contact;
