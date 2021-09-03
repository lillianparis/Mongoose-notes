const mongoose = ('mongoose');
const Schema = mongoose.Schema;

// Require the use of mongoose
const mongoose = require("mongoose");

// Creating the schema
const Schema = mongoose.Schema;

// Creating the transaction Schema
// Enter the transaction name, amount and the date is going to be saved as the current date of deposit or withdrawl
const grocerySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a grocery name"
  },
  value: {
    type: Number,
    required: "Enter a cost"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Making our model
const Grocery = mongoose.model("Grocery", grocerySchema);

module.exports = Grocery;