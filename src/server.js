const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const log = console.log;
dotenv.config({path: './src/config/config.env'});
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 5000;
const mongo = require ('./config/mongo');

// Morgan setup
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Routes, view engine & static folder
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '..', '..', 'public')));
app.use('/', require('./api/routes/index'));


// Starting server
const start = async () => {
    try {
        await app.listen(PORT, log(`Server running in ${process.env.NODE_ENV} mode at http://www.localhost:${PORT} `));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
