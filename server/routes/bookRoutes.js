const express = require("express");
const bookController = require("./../controller/bookController");

const router = express.Router();

router
  .route("/")
  .get(bookController.getAllBook)
  .post(bookController.createBook);

router
  .route("/:id")
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;
