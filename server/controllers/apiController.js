require('dotenv').config();

const apiController = {};

// ${skintype} ${price}
apiController.makePost = (req, res, next) => {
  console.log('in the makepost apicontroller');
  const { price, skintype, product } = req.body;
  fetch(
    `https://api.rainforestapi.com/request?api_key=${process.env.AMAZON_API_KEY}&type=search&amazon_domain=amazon.com&search_term=${product}+${skintype}+${price}&max_page=1`
  )
    .then((data) => data.json())
    .then((data) => {
      res.locals.personalCard = data.search_results;
      next();
    })
    .catch((e) => {
      return next(e.message);
    });
};

module.exports = apiController;
