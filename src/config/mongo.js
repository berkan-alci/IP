const mongoose = require('mongoose');
require('dotenv').config({path: './src/config/config.env'});
const uri = process.env.MONGO_URI;

module.exports = async () => {
  
    try {
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
  return mongoose
};