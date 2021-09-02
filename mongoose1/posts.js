const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const postsSchema = new Schema({
    content: String,
    user: Schema.ObjectId,

})

mongoose.model('posts', postsSchema)