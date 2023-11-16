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
    const userId = res.locals.userId;
    res.status(200).json(userId);
  }
);

// login
router.post(
  '/login',
  userController.verifyUser,
  sessionController.startSession,
  (req, res) => {
    console.log('Client login!');
    const userId = res.locals.user_id;
    res.status(200).json(userId);
  }
);

module.exports = router;
