const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['Entertainment', 'Technology', 'Sports', 'Business', 'Health', 'Science'],
    required: true
  },
  title: {
    type: String,
    minlength: 3,
    required: true
  },
  blogger_name: {
    type: String,
    minlength: 3,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    minlength: 3,
    required: true
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
