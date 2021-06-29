const express = require('express');
const app = express();
const router = express.Router();
const path = require('path')

app.set('view engine', 'ejs');
app.set('/', path.join(__dirname + 'views'));

// @desc    Landing page
// @Route   /
router.get('/', (req, res) => {
    res.render('./pages/index.ejs');
});

router.get('/login', (req, res) => {
    res.render('./pages/login.ejs')
});

router.get('/register', (req, res) => {
    res.render('./pages/register.ejs')
});


module.exports = router

