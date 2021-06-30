const express = require('express');


//  @desc    User Registration Controller
//  @route  /auth/register
//  

function postRegister (req, res) {
    const { username, password, email, phone } = req.body;

    //Validate data (authValidation)
    
    // encrypt password (helper)

    // Send to db (authModel)
 
    // return JSON to clientside
};

module.export = {
    postRegister,

}