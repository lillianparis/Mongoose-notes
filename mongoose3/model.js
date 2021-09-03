const mongoose = require("mongoose");

// Creating the schema
const Schema = mongoose.Schema;

// Creating the transaction Schema
// Enter the transaction name, amount and the date is going to be saved as the current date of deposit or withdrawl
const peopleSchema = new Schema({
  name: {
    firstName: String,
    lastName: String,
  },
  value: {
    age: Number,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Making our model
const People = mongoose.model("People", peopleSchema);

module.exports = People;
