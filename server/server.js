const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the static file
app.use('/client', express.static(path.resolve(__dirname, '../client')));

// Declare the routes
const authRouter = require('./routes/authRouter.js');
const apiRouter = require('./routes/apiRouter.js');
const userRouter = require('./routes/userRouter.js');

// Define route handlers
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/user', userRouter);

// Define root
app.get('/', (req, res) => {
  // res.status().res.json("");
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

// Unknown route handler
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT);

module.exports = app;
