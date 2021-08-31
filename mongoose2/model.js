const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// you can do const schema = mongoose.schema w/ const exampleSchema = new Schema ({
// Or you can use const musicSchema = new mongoose.Schema ({

// 'required' is used for true/false. A field is required in order for this model to be saved.
// if you are using an email, you'll need to use the "unique:'
// 'default: Date.now' means the date is being saved as an ISO date for right now
const musicSchema = new Schema({
 
})



musicSchema.methods.speak = function speak() {
    const type = this.name
      ? "What type of music do you like " + this.name
      : "I don't know";
    console.log(type);
  };
  

const music = mongoose.model('music', musicSchema);

module.exports = music;

