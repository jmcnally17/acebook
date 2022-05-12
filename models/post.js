const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  time : { type : Date, default: Date.now },
},
{timestamps: true}
);



const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
