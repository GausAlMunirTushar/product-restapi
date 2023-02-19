const express = require('express');
const productsRoute = express.Router();
const {getAllProducts, } = require('../controllers/productsController');


productsRoute.get('/', getAllProducts);
// productsRoute.get('/:id', getProductsByID);

module.exports = productsRoute;