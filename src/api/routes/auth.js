const express = require('express');
const router = express.Router();
const { postRegister } = require('../controllers/authController');


//  @desc    User Registration
//  @route  /auth/register

router.post('/auth/register', postRegister);


module.exports = router;