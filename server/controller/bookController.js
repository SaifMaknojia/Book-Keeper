const newBook = require("./../model/bookModel");

exports.getAllBook = async (req, res) => {
  try {
    const book = await newBook.find();
    res.status(200).json({
      status: "Success",
      results: book.length,
      book
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: "Failed to add tour"
    });
  }
};

exports.createBook = async (req, res) => {
  try {
    const book = await newBook.create(req.body);
    res.status(201).json({
      status: "Success",
      book: book
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: "Failed to add tour"
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await newBook.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.status(200).json({
      status: "Success",
      book
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await newBook.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({
      status: "Success",
      message: "Delete Tour"
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err
    });
  }
};
