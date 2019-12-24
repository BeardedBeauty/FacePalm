/* eslint-disable no-console */
// require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");


app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());// for parsing json data
app.use(express.urlencoded({ extended: true })) // parsing form data

const port = process.env.PORT || 3333;
// app.use((_, res) => {
//     res.sendFile(join(__dirname, "build", "index.html"));
// });

app.use(routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Connect to the Mongo DB
mongoose.connect("mongodb://Mark:databas3password@ds253368.mlab.com:53368/heroku_n3zsj9l9", { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow=Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => console.log(`Listening on port ${port}`));