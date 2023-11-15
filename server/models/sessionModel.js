const session = require('../models/sessionModel');
const sessionController = {};

sessionController.startSession = (req, res, next) => {
    // const userId = res.locals.user;
  
    // session.create( {cocketIdL: usersId}, )
  
    // const sessionSchema = new Schema(PageTransitionEvent
    //   cocketId: {}
    //   createAt: {})
    // console.log(req.body);
  
    return next();
  };