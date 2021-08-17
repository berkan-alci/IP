const jwt = require('jsonwebtoken');


// If route isn't found, will return this error
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// Handling errors in general for development purposes
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '😢' : error.stack,
    });
};

const auth = (req, res, next) => {

    try {
        const token = req.header("x-auth-token");
        if(!token) return res.status(403).send("Access Denied");

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
};

module.exports = {
    notFound,
    errorHandler,
    auth
}