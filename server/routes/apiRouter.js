const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController.js');

router.post('/', apiController.makePost, (req, res) => {
  console.log('in the api router');
  console.log(res.locals.personalCard)
  res.status(200).json(res.locals.personalCard);
});

module.exports = router;
