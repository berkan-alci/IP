const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const reqString = {
    type: String,
    required: true,
}

//User schemas
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
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
}, { collection: 'users'})

const teacherSchema = mongoose.Schema({

}, {collection: 'users'})

const adminSchema = mongoose.Schema({

}, {collection: 'users'})

// Auth tokens of user roles
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
};

teacherSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
};

adminSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

// User models
const userModel = mongoose.model('user', userSchema);
const teacherModel = mongoose.model('teacher', teacherSchema);
const adminModel = mongoose.model('admin', adminSchema);

const validate =  (user) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        role: Joi.string().required()
    });
    return schema.validate(user);
};

module.exports = {userModel, teacherModel, adminModel, validate};
