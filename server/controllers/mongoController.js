const mongoose = require('mongoose');
const Client = require('../models/clientModel.js');

const clientController = {}

clientController.createClient = (req, res, next) => {
    console.log('req.body: ', req.body);
    const { userName, password, skinType, issues, allergies, toner, essence, moisturizer, spf } = req.body;
    try {
        console.log("I am inside TRY");
        const newClient = { userName: userName, password: password, skinType: skinType, issues: issues, allergies: allergies, currentRoutine:{ toner: toner, essence: essence, moisturizer: moisturizer, spf: spf }};
        const clientObj = Client.create(newClient);
        // if we decide to send back the newClient information for verification purposes
        console.log('I am new client', newClient);
        res.locals.clientObj = newClient;
        // res.redirect('/:userName/:password');
        next();
    }
    catch (err) {
        const error = {
            log: 'clientController.createClient',
            status: 400,
            message: { err: err },
        };
        next(error);
    }
}

clientController.getClientInfo = async (req, res, next) => {
    const { userName, password } = req.params;
    console.log(`in here: ${userName}, ${password}`);
    try {
        const foundUser = await Client.findOne({ userName: userName, password: password });
        if (foundUser){
            res.locals.clientObj = foundUser;
            console.log('res.locals.studentObj:', res.locals.clientObj);
            next();
        }
    }
    catch (err) {
        const error = {
            log: 'userController.getUser',
            status: 400,
            message: { err: err.message },
        };
        next(error);
    }
    next();
}


module.exports = clientController;