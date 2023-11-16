const db = require('../models/sqlDB');

const userController = {};

userController.createUser = async (req, res, next) => {
  // grab the username and password from req.body
  const { username, password } = req.body;
  console.log('Info from req.body: ', req.body);

  // signup query: creates a new user in 'user' table of our SQL DB
  const values = [username, password];
  const signupQuery =
    'INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING *';

  const resultSignup = await db.query(signupQuery, values);
  console.log('Returned result after signupQuery: ', resultSignup);

  const userId = resultSignup.rows[0]._id;
  console.log('userId: ', userId);

  res.locals.userId = userId;

  next();
};

// Verify the user for login page
userController.verifyUser = async (req, res, next) => {
  // Declare the input username and password for the query
  // Query the username in SQL database by input username
  // Match the input password with data password. If it matches, set the res.locals, If not, set the error back
  try {
    const username = req.body.username;
    const password = req.body.password;
    const values = [username, password];
    const query =
      'SELECT _id FROM "public"."user" WHERE username = $1 AND password = $2';
    const data = await db.query(query, values);
    const userId = data.rows[0]._id;
    console.log('This is userId: ', userId);
    if (userId) {
      res.locals.user_id = userId;
      console.log('This is res.locals.user_id: ', res.locals.user_id);
      return next();
    } else {
      return next({
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred if the data did not match' },
      });
    }
  } catch (error) {
    return next({
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred in verifyUser middleware' },
    });
  }
};

userController.getUserProducts = async (req, res, next) => {
  console.log('hit getUserProducts');
  try {
    const userId = req.body.ssid;
    const query = 'SELECT name, image, skin_type, product_type, price FROM products WHERE user_id = $1';
    const resQuery = await db.query(query, [userId]);
    console.log('resQuery.rows', resQuery.rows);
    if (resQuery) {
      res.locals.productData = resQuery.rows;
      return next();
    } else {
      throw new Error('Query failled in getUserProducts');
    }
  } catch (err) {
    return next({
      log: ('Error in userController.getUserProducts:', err),
      status: 500,
      message: { err: 'Could not fetch your products' }
    });
  }
};

module.exports = userController;
