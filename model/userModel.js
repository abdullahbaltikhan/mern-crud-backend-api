const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number
});
// Compile model from schema
var usermodel = mongoose.model('usermodel', userSchema );

module.exports = usermodel;