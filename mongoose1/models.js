// Setting up the Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Schema is called a Model, because it talks to the database for us
// (Same as Sequelize, just a different language)
const usersSchema = new Schema({
  name: String,

})

mongoose.model('users', usersSchema)