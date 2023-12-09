// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your API routes and handle database interactions here

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
