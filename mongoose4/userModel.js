const mongoose = ('mongoose');
const Schema = mongoose.Schema;

const grocerySchema = new Schema ({
  type: String,
  color: String,
  catagory: String,
})