'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new Schema
const MainPostSchema = new Schema({
  author: {type: String, required: true},
  text: {type: String, required: true}
});

module.exports = mongoose.model('MainPostSchema', MainPostSchema);
