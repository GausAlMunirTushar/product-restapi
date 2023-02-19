const productModel = require('../models/productModel');


const getAllProducts = async (req, res) => {
    const {company, name, featured } = req.query;
    const queryObject = {};
    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if(featured){
        queryObject.featured = featured;
    }
    const products = await productModel.find(queryObject);
    res.status(200).json({products});
}

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({"message": "All products testing"});
}


module.exports = {
    getAllProducts, 
    getAllProductsTesting,
    };