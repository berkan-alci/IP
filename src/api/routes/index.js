const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

// Variables for EJS

// @desc    Landing page
// @Route   /
router.get('/', (req, res) => {
    res.render('./pages/index.ejs', {
        title: 'IP - Home',
        validation: ''
    });
});

// @desc    Login page
// @Route   /login
router.get('/login', (req, res) => {
    res.render('./pages/login.ejs', {
        title: 'IP - Login',
        validation: '/js/validation.js'
    });
});

//  @desc    Register page
//  @Route   /register
router.get('/register', (req, res) => {
    res.render('./pages/register.ejs', {
        title: 'IP - Register',
        validation: '/js/validation.js'
    });
});

//  @desc    Contact page
//  @Route   /contact
router.get('/contact', (req, res) => {
    res.render('./pages/contact.ejs', {
        title: 'IP - Contact Us',
        validation: ''
    });
});

//  @desc    About Us page
//  @Route   /about
router.get('/about', (req, res) => {
    res.render('./pages/about.ejs', {
        title: 'IP - About Us',
        validation: ''
    });
});

//  @desc    Main page
//  @Route   /main
router.get('/main', (req, res) => {
    res.render('./pages/main.ejs', {
        title: 'IP - Main',
        validation: ''
    });
});


module.exports = router

