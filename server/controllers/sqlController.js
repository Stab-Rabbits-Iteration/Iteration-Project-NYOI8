// sql
const db = require('../models/productSqlModel.js');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const testScrape = fs.readFileSync(
  path.resolve(__dirname, './fake-data/cleanserScrape.json'),
  'utf8'
);
const testProducts = fs.readFileSync(
  path.resolve(__dirname, './fake-data/productInfo.json'),
  'utf8'
);
const parser = require('./fake-data/parsers.js');

const sqlController = {
  // choose product category (moisturizer, etc.)
  categoryScrape: async (req, res, next) => {
    console.log('in here');

    const productSkus = {}; // productId: 'P411387', preferedSku: '1863588'
    // will be an object like {P411387: 1863588}

    // res.locals.fetcher = {guy: 2};
    // return next();

    const options = {
      method: 'GET',
      url: 'https://sephora.p.rapidapi.com/us/products/v2/list',
      params: {
        categoryId: 'cat920033',
        pageSize: '5',
        currentPage: '2'
      },
      headers: {
        'X-RapidAPI-Key': '046dd891dbmsh2d4484a6c2e435ep148753jsn788ef8bbfd27',
        'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      console.log('were back from fecth');
      //   console.log(response.data);
      // console.log(response)

      res.locals.category = response.data.content.sid;
      console.log(res.locals.category);

      const productList = response.data.products;
      //   console.log(productList);
      for (let obj of productList) {
        let id = obj.productId;
        // console.log(obj.productId);
        let targetUrl = obj.targetUrl;
        // console.log(targetUrl);
        let sku = parser.skuParser(targetUrl);
        productSkus[id] = sku;
      }

      // res.locals.fetcher = response.data;
      //   fs.writeFileSync(
      //     path.resolve(__dirname, "./fake-data/cleanserScrape.json"),
      //     JSON.stringify(response.data)
      //   );

      res.locals.productSkus = productSkus;
      console.log('product skus: ', productSkus);
      return next();
    } catch (error) {
      console.error(error);
      return next(error);
    }

    // const productList = JSON.parse(testScrape).products;

    // let count = 0; //to comment
    // for (let obj of productList) {
    //   let id = obj.productId;
    //   //   console.log(id);
    //   let sku = obj.currentSku.skuId;
    //   //   console.log(sku);
    //   productSkus[id] = sku;
    //   if (count++ > 3) break; //to comment
    // }
  },

  productScrape: async (req, res, next) => {
    const productSkus = res.locals.productSkus;
    const productInfo = [];

    console.log('in product scrape');

    for (let id in productSkus) {
      const product = {
        method: 'GET',
        url: 'https://sephora.p.rapidapi.com/us/products/v2/detail',
        params: {
          productId: id,
          preferedSku: productSkus[id]
        },
        headers: {
          'X-RapidAPI-Key':
            '046dd891dbmsh2d4484a6c2e435ep148753jsn788ef8bbfd27',
          'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
        }
      };
      try {
        console.log('bout to fetch');
        // const ready = await setTimeout(() => {}, 500);
        const response = await axios.request(product);
        console.log('were back from product fetch');
        const data = response.data;
        // console.log(data);

        //
        // console.log(data.productDetails);
        const title = data.productDetails?.displayName;
        const brand = data.productDetails?.brand?.displayName;
        const imageUrl = data.currentSku?.skuImages.imageUrl;

        const skin = data.productDetails?.longDescription;
        const skinType = parser.skinTypeParse(skin);
        const skinConcern = parser.skinConcernParse(skin);

        const rawDescription = data.currentSku?.ingredientDesc;
        console.log(rawDescription); // need to delete up to <br><br> then array of ingredient to comma
        const ingredientArray = parser.ingredientParse(rawDescription);

        productInfo.push({
          title,
          brand,
          category: res.locals.category,
          imageUrl,
          skinType,
          skinConcern,
          //   skin,
          ingredientArray
        });
        console.log('moving on');
      } catch (error) {
        console.error(error);
        return next(error);
      }
    }
    fs.appendFileSync(
      path.resolve(__dirname, './fake-data/productInfo.json'),
      JSON.stringify(productInfo)
    );
    console.log('bout to leave...');
    res.locals.productInfo = productInfo;
    res.locals.fetcher = 'great job'; // data
    return next();
  },

  productSQL: async (req, res, next) => {
    // const productInfo = res.locals.productInfo;
    let productInfo = JSON.parse(testProducts); // array of product objects
    // console.log(testProducts);
    // productInfo = Object.assign({}, JSON.parse(productInfo));
    // console.log(productInfo);
    console.log('length is: ', productInfo.length);

    let count = 24;

    for (let i = count; i < count + 2; i++) {
      let product = productInfo[i];
      //   console.log(testProducts[product]);
      // add product to product table
      const productParams = [
        product.title,
        product.brand,
        product.category,
        product.skinType,
        product.skinConcern,
        product.imageUrl
      ];
      console.log(productParams);
      const productQ = `INSERT INTO "products" 
                        (name, brand_name, category, skin_type, skin_concern, img_url)
                        VALUES ('${productParams[0]}', '${productParams[1]}', '${productParams[2]}', '${productParams[3]}', '${productParams[4]}', '${productParams[5]}');`;

      db.query(productQ);
    }

    //   const productSelect = `SELECT * FROM "products" WHERE name = '${productParams[0]}'`;
    //   console.log("product params:", productParams[0]);
    //   console.log(productParams);

    //   const prod = await db.query(productSelect);

    // .then((resp) => {
    //   console.log("unpacking");
    //   console.log(resp.rows);
    //   // res.locals.productId = resp.rows;
    //   // console.log(res.locals.productId);s
    // });
    return next();
  },

  ingredientSQL: (req, res, next) => {
    const ingredientIDs = [];
    //   for (let ingred of product.ingredientArray) {
    //     // const ingredientParams = [ingred];
    //     const ingredientQ = `INSERT INTO "ingredients" (name) VALUES ('${ingred}');`;
    //     db.query(ingredientQ);

    //     const ingredSelect = `SELECT * FROM "products" WHERE name = '${productParams[0]}'`;
    //     db.query(ingredSelect).then((res) => {
    //       const ingredientId = res.rows._id;
    //       ingredientIDs.push(ingredientId);
    //     });
    //   }
    //   console.log(ingredientIDs);
    // })
    // .then(() => next())
    // .catch((err) => next(err));

    // add all individual ingredients to the ingredient table if it doesn't exist

    //   console.log(productId);
    //   console.log(ingredientIDs);

    // create table with product id and its ingreident ids
  },

  getFaceWash: async (req, res, next) => {
    const category = 'Face Wash & Cleansers';

    const catQuery = `SELECT * FROM "products" WHERE "category" = '${category}'`;
    db.query(catQuery).then((resp) => {
      console.log(res.locals);
      res.locals.getFaceWash = resp.rows[0];
      return next();
    });
  },

  getEssence: (req, res, next) => {
    const category = 'Mists & Essences';

    const catQuery = `SELECT * FROM "products" WHERE "category" = '${category}'`;
    db.query(catQuery).then((resp) => {
      res.locals.getEssence = resp.rows[0];
      return next();
    });
  },

  getToner: (req, res, next) => {
    const category = 'Toners';

    const catQuery = `SELECT * FROM "products" WHERE "category" = '${category}'`;
    db.query(catQuery).then((resp) => {
      res.locals.getToner = resp.rows[0];
      return next();
    });
  },

  getNightCream: (req, res, next) => {
    const category = 'Night Creams';

    const catQuery = `SELECT * FROM "products" WHERE "category" = '${category}'`;
    db.query(catQuery).then((resp) => {
      res.locals.getNightCream = resp.rows[0];
      return next();
    });
  },

  getSunscreen: (req, res, next) => {
    const category = 'Face Sunscreen';

    const catQuery = `SELECT * FROM "products" WHERE "category" = '${category}'`;
    db.query(catQuery).then((resp) => {
      res.locals.getSunscreen = resp.rows[0];
      return next();
    });
  }
};

module.exports = sqlController;
