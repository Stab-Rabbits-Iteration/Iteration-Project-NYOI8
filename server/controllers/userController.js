const db = require('../models/sqlDB');

const userController = {};

userController.createUser = (req, res, next) => {
  next();
};

userController.verifyUser = async (req, res, next) => {
  next();
};

module.exports = userController;
