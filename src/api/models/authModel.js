const mongo = require('../../config/mongo');
const User = require('./schema/user');
const mongoose = require ('mongoose');

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
            console.log('User created successfully', response);
        } catch (err) {
            if (err.code === 11000) {
                return res.json({status:'error', error:'Username already in use!'});
            }
            throw err;

        } finally {
            mongoose.connection.close();
        }
    })
};

const getUser = () => {

}

module.exports = {
    postUser,

}