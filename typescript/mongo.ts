import * as mongoose from 'mongoose'
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
var Blog = mongoose.model('Blog', blogSchema);
console.log(Blog)

 