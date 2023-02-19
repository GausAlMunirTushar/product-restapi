const mongoose = require('mongoose');
const productModel = require('./models/productModel');
const connectDB = require('./config/connectDB');
const productJSON = require('./data/products.json');

const insertProduct = async (MONGO_URI) => {
    try {
        await connectDB(MONGO_URI);
        await productModel.create(productJSON);
        console.log('Data imported');
    } catch (error) {
        console.log(error);
    }
}
insertProduct();