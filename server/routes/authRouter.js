const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');

// Signup
router.post(
  '/signup',
  userController.createUser,
  sessionController.startSession,
  (req, res) => {
    console.log('client created');
    res.status(200).json(res.locals.ssid);
  }
);

// login
router.post(
  '/login',
  userController.verifyUser,
  sessionController.startSession,
  (req, res) => {
    res.status(200).json(res.locals.ssid);
  }
);

module.exports = router;
