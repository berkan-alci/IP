const bcrypt = require('bcryptjs');

// encrypt password using the bcrypt library
const encryptPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
};

const checkPassword = (password) => {

};

module.exports = {  
    encryptPassword,

}