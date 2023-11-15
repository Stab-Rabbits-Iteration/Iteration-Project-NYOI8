const express = require('express');
const router = express.Router();

//Signup
// router.get('/signup', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/signup.html'));
// });

router.post(
  '/signup',
  userController.createUser,
  sessionController.startSession,
  (req, res) => {
    console.log('client created');
    res.status(200).json(res.locals.ssid);
  }
);

//login
router.post(
  '/login',
  userController.verifyUser,
  sessionController.startSession,
  (req, res) => {
    res.status(200).json(res.locals.ssid);
  }
);

/////Old Code/////////
// router.get('/signup', (req, res) => {
//   // this function serves the signup html when directed to the signup page
//   res.sendFile(path.resolve(__dirname, '../client.signup.html'));
// });

// router.post('/signup', clientController.createClient, (req, res) => {
//   console.log('client created');
//   res.redirect('/home');
// });

// // after logging in, our plan is to have a component to display userinfo so the endpoint would be '/'?
// router.get('/login', clientController.getClientInfo, (req, res) => {
//   res.status(200).send(res.locals.clientObj);
// });

module.exports = router;
