'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new Schema
const PostsSchema = new Schema({
  author: String,
  text: String
});

module.exports = mongoose.model('Post', PostsSchema);
