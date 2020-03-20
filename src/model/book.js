const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: String,
    title: String,
    isbn  : String,
    year : Date,
    autor: String,
});

module.exports = mongoose.model('Book', BookSchema)