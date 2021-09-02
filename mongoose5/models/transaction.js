// Require the use of mongoose
const mongoose = require("mongoose");

// Creating the schema
const Schema = mongoose.Schema;

// Creating the transaction Schema
// Enter the transaction name, amount and the date is going to be saved as the current date of deposit or withdrawl
const transactionSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Making our model
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
