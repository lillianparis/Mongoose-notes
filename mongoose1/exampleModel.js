// Setting up the Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema is called a Model, because it talks to the database for us
// (Same as Sequelize, just a different language)
const ExampleSchema = new Schema({
  // The example model has the field 'string'
  // If its not filled out... the error message is "string is required"
  string: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  // Validators can be added
  number: {
    type: Number,
    unique: true,
    required: true
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  boolean: Boolean,

  array: Array,

  date: {
    type: Date,
    default: Date.now
  },

  longstring: {
    type: String,
    validate: [({ length }) => length >= 6, "Longstring should be longer."]
  }
});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;

// Mongoose lets us add schemas