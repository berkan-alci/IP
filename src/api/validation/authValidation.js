
//Validate registration data
const registerValidation = (username, password, email, phone) => {

    if (!username || typeof username !== 'string') {
        return res.json({status:'error', error:'Invalid username!'});
    }

    if (!password || typeof password !== 'string') {
        return res.json({status:'error', error:'Invalid password!'});
    }

    if (password.length < 8) {
        return res.json({status:'error', error:'Password must be larger than 8 characters!'});
    }

    if (!email || typeof email !== 'string') {
        return res.json({status:'error', error:'Invalid email!'});
    }

    if (!phone || typeof phone !== 'string') {
        return res.json({status:'error', error:'Invalid phone number!'})
    }
};

const loginValidation = () => {

};

module.exports = {
    registerValidation,
    loginValidation
};