const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const musicSchema = new Schema({
  artist: objectId,
  song: String,
  album: String
});

const music = mongoose.model('music', musicSchema);

const song1 = new music({ artist: 'Introduction to Mongoose', song: 10, album: 25 });
 

    song1.save(function (err, music) {
      if (err) return console.error(err);
      console.log(music.name + " saved to song collection.");
    });



  
module.exports = music;

