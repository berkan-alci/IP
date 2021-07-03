const mongo = require('../../config/mongo');
const User = require('./schema/user');
const mongoose = require ('mongoose');
const { loginValidation } = require('../validation/authValidation');

//Send user data to db
const postUser = async (username, hashedPassword, email, phone) => {
    await mongo().then(async (mongoose) => {
        try {
            const response = await User.create({
                username,
                password: hashedPassword,
                email,
                phone
            });
        } catch (err) {
            if (err.code === 11000) {
                return res.json({status:'error', error:'Username/Email already in use!'});
            }
            throw err;

        } finally {
            mongoose.connection.close();
        }
    });
};

const getUser = async (res, username, password) => {
    await mongo().then(async (mongoose) => {

        try {
            const user = await User.findOne({ username }).lean();
    
            if(!user) {
                return res.json({status:'error', error:'Invalid username/password'});
            }

           await loginValidation(username, password);
    
           res.json({status:'ok'});
        } catch (error) {
            res.json({status: 'error', error:'Invalid username/password'});
        } finally {
            mongoose.connection.close();
        }
    });

    
}


module.exports = {
    postUser,
    getUser

}