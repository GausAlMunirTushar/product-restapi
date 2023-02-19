const express = require('express');
const app = express();
const productsRoute = require('./routes/productsRoute');

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// middleware to set routes
app.use('/api/products', productsRoute);

module.exports = app;