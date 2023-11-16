const axios = require('axios')
const apiController = {};

apiController.makePost = (req, res, next) => {
  console.log('in the makepost apicontroller')
  const { price, skintype, product } = req.body;
  const params = {
    api_key: process.env.AMAZON_API_KEY,
    type: "search",
    amazon_domain: "amazon.com",
    search_term: `${product} ${skintype} ${price}`,
  }
  axios.get('https://api.rainforestapi.com/request', { params })
    .then((response) => 
      if(response.status === 200) {
        res.locals.personalCard = JSON.stringify(response.data);
        next()
      })
    .catch((error) => {
      return next({
        log: 'Express error handler caught unknown middleware error in the apiController',
        status: 404,
        message: { err: 'An error occurred while making a post' }
      });
    });
};

module.exports = apiController;
