const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

// Variables for EJS

// @desc    Landing page
// @Route   /
router.get('/', (req, res) => {
    res.render('./pages/index.ejs', {
        title: 'IP - Home'
    });
});

// @desc    Login page
// @Route   /login
router.get('/login', (req, res) => {
    res.render('./pages/index.ejs', {
        title: 'IP - Login'
    });
});

// @desc    Register page
// @Route   /register
router.get('/register', (req, res) => {
    res.render('./pages/index.ejs', {
        title: 'IP - Register'
    });
});

// @desc    Contact page
// @Route   /contact
router.get('/contact', (req, res) => {
    res.render('./pages/index.ejs', {
        title: 'IP - Contact Us'
    });
});

// @desc    About Us page
// @Route   /about
router.get('/about', (req, res) => {
    res.render('./pages/index.ejs', {
        title: 'IP - About Us'
    });
});

// @desc    Main page
// @Route   /main
router.get('/main', (req, res) => {
    res.render('./pages/index.ejs', {
        title: 'IP - Main'
    });
});


module.exports = router

