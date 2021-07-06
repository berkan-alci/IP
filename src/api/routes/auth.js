const express = require('express');
const router = express.Router();
const { postRegister, postLogin } = require('../controllers/authController');


//  @desc    User Registration, post data to db
//  @route  /auth/register
router.post('/auth/register', postRegister);

//  @desc    User Login, authenticate current user
//  @route  /auth/login
router.post('/auth/login', postLogin );

router.get('/auth/logout');


module.exports = router;