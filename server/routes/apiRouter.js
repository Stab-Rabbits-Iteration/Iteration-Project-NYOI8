const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController.js');

router.post('/', apiController.makePost, (req, res) => {
  console.log('in the apicontroller')
  res.status(200).json(res.locals.personalCard);
});

module.exports = router;
