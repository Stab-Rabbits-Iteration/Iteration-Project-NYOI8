const Session = require('../models/sessionModel');

const sessionController = {};

/**
 * setSSIDCookie - store the user id in a cookie
 */
sessionController.setSSIDCookie = (req, res, next) => {
  const { userId } = res.locals;
  // const userId = res.locals.userId;

  // CREATE SSID
  res.cookie('ssid', userId, { httpOnly: true });

  console.log('created a cookie!');
  next();
};

sessionController.startSession = async (req, res, next) => {
  // GET USERID FROM RES OBJECT
  const { userId } = res.locals;

  // IF A LOGGED IN USER TRYS TO LOG IN AGAIN
  // DO NOT CREATE NEW SESSION; SEND THEM TO NEXT MIDDLEWARE
  if (await Session.findOne({ cookieId: userId })) {
    return next();
  } else {
    // CREATE NEW SESSION FOR USER; IF NO SESSION IS RUNNING
    const newSession = await Session.create({ cookieId: userId });
    console.log('created new Session: ', newSession);

    next();
  }
};

module.exports = sessionController;
