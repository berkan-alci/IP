const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true,
}

const userSchema = mongoose.Schema({

    username: {type: String, required: true, unique: true},
    password: reqString,
    email: reqString,
    phone: reqString

}, { collection: 'users'})

const userModel = mongoose.model('UserSchema', userSchema);

module.exports = userModel;
