// Require Mongoose
let mongoose = require('mongoose');
// Defining the schema 
let Schema = mongoose.Schema;

// Create the instance of the schema

let bookSchema = new Schema({
    title: String,
    keywords: Array,
    published: Boolean
});

// We use model, which allows us to use schema in other files
// Defining the model
// The first parameter of mongoose.model is our collection. The second parameter is the schema that the model will be using.
module.exports = mongoose.model('book', bookSchema);



// Now there needs to be an established connection with mongoDB
