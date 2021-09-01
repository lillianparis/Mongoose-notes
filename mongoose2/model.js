const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// you can do const schema = mongoose.schema w/ const exampleSchema = new Schema ({
// Or you can use const musicSchema = new mongoose.Schema ({

// 'required' is used for true/false. A field is required in order for this model to be saved.
// if you are using an email, you'll need to use the "unique:'
// 'default: Date.now' means the date is being saved as an ISO date for right now
const musicSchema = new Schema({
  artist: objectId,
  song: String,
  album: String
});

const music = mongoose.model('music', musicSchema);

const song1 = new music({ artist: 'Introduction to Mongoose', song: 10, album: 25 });
 
    // save model to database
    song1.save(function (err, music) {
      if (err) return console.error(err);
      console.log(music.name + " saved to song collection.");
    });



  
module.exports = music;

