const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/getProducts', userController.getUserProducts, (req, res) => {
  console.log('hit /user/getProducts');
  res.status(200).json(res.locals.productData);
});

module.exports = router;
