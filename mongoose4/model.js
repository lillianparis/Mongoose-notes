const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = mongoose.Schema({
    name: {
        dogBreed: String,
    dogName: String
    },
    Description: String,
    Coloring: String,
    Toy: String,
    Created: {
        type: Date,
        default: Date.now
    }
});