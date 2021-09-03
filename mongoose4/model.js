const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The car schema contains several properties of type string. It contains a reference to the dealerships schema. The car Schema contains an array of dealerships. Each dealership consists of a description, brand and location.
// Mongoose enforces flexibility to create schemas with references to other chemas or, as in the example with the dealerships property. You're allowed to create an array of child properties that could be contained in a related schema. 
// When a car

var vehicleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
            firstName: String,
        lastName: String
    },
    biography: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    profilePicture: Buffer,
    created: { 
        type: Date,
        default: Date.now
    }
});

const carSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    carMake: String,
    carmodel: String,
    country: {
        type: mongoose.Schema.Types.ObjectId
    },
    dealerships: [
        {
            description: String,
            brands: String,
            location: String,
            Created: {
                type: Date,
                default: Date.now

            }
        }
    ],
    created: {
        type: Date,
        default: Date.now
    }
});
const Car = mongoose.model('Car', carSchema);
