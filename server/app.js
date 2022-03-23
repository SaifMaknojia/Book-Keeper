const express = require("express");
const cors = require("cors");
const app = express();
const bookRouter = require("./routes/bookRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
};
app.use(cors());
app.use("/api/v1/books", bookRouter);

module.exports = app;
