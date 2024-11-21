const mongoose = require('mongoose');
require('dotenv').config();


const mongoURL = process.env.MONGODB_URL_LOCAL ;

if (!mongoURL) {
    console.error('MongoDB connection URL is not defined in the environment variables.');
    process.exit(1); 
}


mongoose.connect(mongoURL)
    .then(() => console.log('Connected to MongoDB server'))
    .catch((err) => console.error('MongoDB connection error:', err));


const db = mongoose.connection;


db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});


module.exports = db;
