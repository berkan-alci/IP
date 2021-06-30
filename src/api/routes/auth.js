const express = require('express');
const router = express.Router();
const { postRegister } = require('../controllers/authController');


//  @desc    User Registration
//  @route  /auth/register
router.get('/auth/register', postRegister(req, res));

router.get('/auth/login', (req, res) => {

});

module.exports = router;