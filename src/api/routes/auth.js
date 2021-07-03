const express = require('express');
const router = express.Router();
const { postRegister, postLogin } = require('../controllers/authController');


//  @desc    User Registration
//  @route  /auth/register
router.post('/auth/register', postRegister);

//  @desc    User Login
//  @route  /auth/login
router.post('/auth/login', postLogin );


module.exports = router;