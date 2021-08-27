// Require Mongoose
let mongoose = require('mongoose');
// Set a variable reference to a mongoose schema
let Schema = mongoose.Schema;

// Create the instance of the schema

let mySchema = new Schema({
    title: String,
    keywords: Array,
    published: Boolean
});

// We use model, which allows us to use schema in other files
module.exports = mongoose.model('my', mySchema);

// Now there needs to be an established connection with mongoDB
