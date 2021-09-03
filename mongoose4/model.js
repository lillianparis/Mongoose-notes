// Required to use mongoose
const mongoose = require('mongoose');

// Creating schema
const Schema = mongoose.Schema;

// Creating carSchema

var carSchema = new Schema({
    name: {
        brandName: String,
        modelName: String
    },
    value: {
    engine: String,
    description: String,
    mpg: String,
    year: String,
},
    date: {
    type: Date,
    default: Date.now
    }
});

// Making our model
const Car = mongoose.model("Car", carSchema);

module.exports = Car;