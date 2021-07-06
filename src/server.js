const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const log = console.log;
dotenv.config({path: './src/config/config.env'});
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 5000;
const middlewares = require('./api/middleware/middlewares');
const authRoutes = require('./api/routes/auth');
const indexRoutes = require('./api/routes/index');


// Morgan setup
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//JSON bodyparser

app.use(express.urlencoded({extended : true}));
app.use(express.json());

// View engine & static folder
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '..', '..', 'public')));

//Routes
app.use('/', indexRoutes);
app.use(authRoutes);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

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
