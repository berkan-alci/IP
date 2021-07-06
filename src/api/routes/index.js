const express = require('express');
const { indexController, loginController, registerController, contactController, aboutController, mainController } = require('../controllers/indexControllers');
const router = express.Router();

// Variables for EJS

// @desc    Landing page
// @Route   /
router.get('/', indexController );

// @desc    Login page
// @Route   /login
router.get('/login', loginController);

//  @desc    Register page
//  @Route   /register
router.get('/register', registerController );

//  @desc    Contact page
//  @Route   /contact
router.get('/contact', contactController );

//  @desc    About Us page
//  @Route   /about
router.get('/about', aboutController);

//  @desc    Main page
//  @Route   /main
router.get('/main', mainController);


module.exports = router

