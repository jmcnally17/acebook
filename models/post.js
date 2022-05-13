const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  time : String,
  likes_count: Number,
},
  {timestamps: true},
);



const Post = mongoose.model("Post", PostSchema);

module.exports = Post;


