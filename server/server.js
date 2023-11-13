const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const sqlController = require("./controllers/sqlController");

const mongoose = require("mongoose");
const clientController = require("./controllers/mongoController.js");

// const mongoURI = 'mongodb://localhost/scratchProject';
// const dbName = 'scratchProject';
// mongoose.connect(mongoURI);
// mongoose.connection.once('open', () => {
//   console.log('Database connected: ', dbName);
// });
// mongoose.connection.on('error', (err) => {
//   console.error('connection error:', err);
// });

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/client", express.static(path.resolve(__dirname, "../client"))); // redirects to the homepage

app.get("/signup", (req, res) => {
  // this function serves the signup html when directed to the signup page
  res.sendFile(path.resolve(__dirname, "../client.signup.html"));
});

app.post("/signup", clientController.createClient, (req, res) => {
  res.status(200).send(res.locals.clientObj);
});

// after logging in, our plan is to have a component to display userinfo so the endpoint would be '/'?
app.get("/:firstName/:lastName", clientController.getClientInfo, (req, res) => {
  res.status(200).send(res.locals.clientObj);
});

app.post("/login", (req, res) => {
  res.status().res.json("");
});

app.get("/newuser", (req, res) => {
  res.status().res.json("");
});

app.get("/refresh", (req, res) => {
  res.status().res.json("");
});

app.get(
  "/fetcher",
  sqlController.categoryScrape,
  sqlController.productScrape,
  (req, res) => {
    // console.log("in here");
    // const data = res.locals.fetcher;
    console.log("back out");
    res.status(200).json("great job");
  }
);

app.get("/", (req, res) => {
  res.status().res.json("");
});

//Unknown route handler
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT);

module.exports = app;
