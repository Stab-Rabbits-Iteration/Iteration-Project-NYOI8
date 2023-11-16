const express = require('express');
const router = express.Router();

router.post('/getProducts', (req, res) => {
  res.status(200).json('hit /getProducts endpoint');
});

module.exports = router;
