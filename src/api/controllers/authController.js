const { registerValidation } = require('../validation/authValidation');
const { encryptPassword } = require('../helpers/authHelper');
const { postUser, getUser } = require('../models/authModel');
const { validate } = require('../models/schema/user.js');
const { auth} = require('../middleware/middlewares');



//  @desc    User Registration Controller
//  @route  /auth/register
const postRegister =  async (req, res) => {
    const { username, password, email, phone } = req.body;

    //Serverside + database validation
    registerValidation(username, password, email, phone);
    validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const hashedPassword = await encryptPassword(password);
    await postUser(username, hashedPassword, email, phone);
    
    res.json({status:'ok'});
};

//  @desc    User Login Controller
//  @route  /auth/login
const postLogin = async (req, res) => {
    const { username, password } = req.body;
    
    await getUser(res, req, username, password);
    console.log('User logged in');
};

module.exports = {
    postRegister,
    postLogin,
}