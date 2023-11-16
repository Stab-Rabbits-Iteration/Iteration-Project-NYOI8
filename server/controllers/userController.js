const db = require('../models/sqlDB');

const userController = {};

userController.createUser = async (req, res, next) => {
  // grab the username and password from req.body
  const { username, password } = req.body;
  console.log('Info from req.body: ', req.body);

  // signup query: creates a new user in 'user' table of our SQL DB
  const signupQuery = 'INSERT INTO user (username, password) VALUES ($1, $2)';
  const values = [username, password];

  const resultSignup = await db.query(signupQuery, values);
  // console.log('Returned result after signupQuery: ', result);

  // get the user id
  const userQuery =
    'SELECT _id FROM user WHERE username = $1 AND password = $2';
  const resultUser = await db.query(userQuery, values);

  console.log('this is resultUser: ', resultUser);

  next();
};

// Verify the user for login page
userController.verifyUser = async (req, res, next) => {
  // Declare the input username and password for the query
  // Query the username in SQL database by input username
  // Match the input password with data password. If it matches, set the res.locals, If not, set the error back
  try {
    const userName = req.body.username;
    const password = req.body.password;
    const query = {
      text: `SELECT _id, username, password FROM "public"."user" WHERE username = '${userName}';`,
      values: [userName],
    };
    const data = await db.query(query);
    console.log('This is testing: ', data);
    if (data.password === password) {
      res.locals = data._id;
      console.log('This is res.locals: ', res.locals);
      return next();
    } else {
      res.redirect('/');
      return next();
    }
  } catch (error) {
    return next('Error happens');
  }
};

module.exports = userController;
