const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const newBook = mongoose.model("book", bookSchema);

module.exports = newBook;