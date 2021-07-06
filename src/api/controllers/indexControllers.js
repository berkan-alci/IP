

const indexController = (req, res) => {
    res.render('./pages/index.ejs', {
        title: 'IP - Home',
        validation: ''
    });
};

const loginController = (req, res) => {
    res.render('./pages/login.ejs', {
        title: 'IP - Login',
        validation: '/js/validation.js'
    });
};

const registerController = (req, res) => {
    res.render('./pages/register.ejs', {
        title: 'IP - Register',
        validation: '/js/validation.js'
    });
};

const contactController = (req, res) => {
    res.render('./pages/contact.ejs', {
        title: 'IP - Contact Us',
        validation: ''
    });
};

const aboutController = (req, res) => {
    res.render('./pages/about.ejs', {
        title: 'IP - About Us',
        validation: ''
    });
};

const mainController = (req, res) => {
    res.render('./pages/main.ejs', {
        title: 'IP - Main',
        validation: ''
    });
};

module.exports = {
    indexController,
    loginController,
    registerController,
    contactController,
    aboutController,
    mainController,
}