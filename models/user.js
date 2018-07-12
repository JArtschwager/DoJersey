const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
 fullName: String,
 Email: String,
});

// Set up passport to 
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
