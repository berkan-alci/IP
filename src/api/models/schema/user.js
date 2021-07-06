const mongoose = require('mongoose');
const { isEmail } = require('validator');

const reqString = {
    type: String,
    required: true,
}

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minLength: [8, 'Minimum password length must be 8 characters']
    },
    email: {
        type: String, 
        required: [true, 'Please enter an email'], 
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email!']
    },
    phone: {
        type: String,
        required: true,
        minLength: 
    }

}, { collection: 'users'})

const userModel = mongoose.model('UserSchema', userSchema);

module.exports = userModel;
