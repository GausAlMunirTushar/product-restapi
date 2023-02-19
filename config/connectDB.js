const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/products-api';

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB connected');
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;