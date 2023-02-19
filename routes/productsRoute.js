const express = require('express');
const productsRoute = express.Router();
const {getAllProducts, getAllProductsTesting} = require('../controllers/productsController');


productsRoute.get('/', getAllProducts);
productsRoute.get('/testing', getAllProductsTesting);

module.exports = productsRoute;