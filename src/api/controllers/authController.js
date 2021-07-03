const express = require('express');
const { registerValidation } = require('../validation/authValidation');
const { encryptPassword } = require('../helpers/authHelper');
const { postUser, getUser } = require('../models/authModel');




//  @desc    User Registration Controller
//  @route  /auth/register
const postRegister =  async (req, res) => {
    const { username, password, email, phone } = req.body;

    registerValidation(username, password, email, phone);
    const hashedPassword = await encryptPassword(password);
    await postUser(username, hashedPassword, email, phone);
    
    res.json({status:'ok'});
};

//  @desc    User Login Controller
//  @route  /auth/login
const postLogin = async (req, res) => {
    const { username, password } = req.body;
    
    await getUser(res, username, password);
    console.log('User logged in');
};

module.exports = {
    postRegister,
    postLogin,

}