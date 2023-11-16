const sessionController = {};

sessionController.startSession = (req, res, next) => {
  console.log(
    'Inside sessionControler.startSession: Should start a session here...'
  );
  next();
};

module.exports = sessionController;
