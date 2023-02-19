const express = require('express');
const connectDB = require('./config/connectDB');
const app = express();
const productsRoute = require('./routes/productsRoute');

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// middleware to set routes
app.use('/api/products', productsRoute);

// connect to database
connectDB();

module.exports = app;