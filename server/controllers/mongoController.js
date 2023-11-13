const mongoose = require('mongoose');
const Client = require('../models/clientModel.js');

const clientController = {}

clientController.createClient = (req, res, next) => {
    const { firstName, lastName, age, skinType, issues, allergies, cleanser, toner, essence, moisturizer, spf } = req.body;
    try {
        const newClient = { firstName: firstName, lastName: lastName, age: age, skinType: skinType, issues: issues, allergies: allergies, currentRoutine: { cleanser: cleanser, toner: toner, essence: essence, moisturizer: moisturizer, spf: spf } };
        const clientObj = Client.create(newClient);
        // if we decide to send back the newClient information for verification purposes
        res.locals.clientObj = newClient;
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
    const { firstName, lastName } = req.params;
    try {
        const foundUser = await Client.findOne({ firstName: firstName, lastName: lastName });
        if (foundUser) {
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