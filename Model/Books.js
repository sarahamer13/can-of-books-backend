'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;


const bookSchema = new Schema ({
  title: String,
  description: String,
  status: String,
  email: String
});

const bookModel = mongoose.model('Books', bookSchema);

module.exports = bookModel;

