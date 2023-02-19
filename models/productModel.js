const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 0,
    },
    createdDate:{
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["microsoft", "apple", "dell", "hp"],
            message: "Company is either: microsoft, apple, dell, hp",
        },
    },
},{versionKey: false});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;