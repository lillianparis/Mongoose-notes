const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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

const People = mongoose.model("People", peopleSchema);

module.exports = People;
