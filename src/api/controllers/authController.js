const express = require('express');
const { registerValidation } = require('../validation/authValidation');
const { encryptPassword } = require('../helpers/authHelper');
const { postUser } = require('../models/authModel');

//  @desc    User Registration Controller
//  @route  /auth/register
//  

const postRegister = (req, res) => {
    const { username, password, email, phone } = req.body;

    //Validate data (authValidation)
    registerValidation(username, password, email, phone);
    // encrypt password (helper)
    encryptPassword(password);
    console.log(encryptPassword(password));
    // Send to db (authModel)
    postUser(username, hashedPassword, email, phone); 
    // return JSON to clientside
    res.json({status:'ok'});
};

module.exports = {
    postRegister,

}