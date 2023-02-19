const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGO_URI || 'mongodb+srv://admin:tushar@cluster0.bstsr.mongodb.net/product-api';

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