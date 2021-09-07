// Require the use of mongoose
const mongoose = require("mongoose");

// Creating the schema
const Schema = mongoose.Schema;

// Creating the grocery Schema
// Enter the transaction name, amount and the date is going to be saved as the current date of deposit or withdrawl
const grocerySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Making our model so that we can interact with our databse 
const Grocery = mongoose.model("Grocery", grocerySchema);

module.exports = Grocery;