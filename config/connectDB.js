const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/products-api';

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;