const express = require('express');
const productsRoute = express.Router();
const {getAllProducts, } = require('../controllers/productsController');


productsRoute.route('/').get(getAllProducts);


module.exports = productsRoute;