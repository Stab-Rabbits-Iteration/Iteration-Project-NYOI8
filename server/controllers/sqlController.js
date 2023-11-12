//sql
const db = require("../models/productSqlModels.js");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const testScrape = fs.readFileSync(
  path.resolve(__dirname, "./fake-data/cleanserScrape.json")
);

const sqlController = {
  //choose product category (moisturizer, etc.)
  initialScrape: async (req, res, next) => {
    console.log("in here");

    const productSkus = {}; //productId: 'P411387', preferedSku: '1863588'
    //will be an object like {P411387: 1863588}

    // res.locals.fetcher = {guy: 2};
    // return next();

    // const options = {
    //     method: 'GET',
    //     url: 'https://sephora.p.rapidapi.com/us/products/v2/list',
    //     params: {
    //         categoryId: 'cat60099',
    //         pageSize: '60',
    //         currentPage: '1'
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': '95f0f70e1bmsh5e365d235aea13ep10a60djsne0255bcdc733',
    //         'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
    //     }
    // };
    //     try {
    //         const response = await axios.request(options);
    //         console.log('were back from fecth')
    //         console.log(response.data);
    //         // console.log(response)
    /**
     * const productList = response.data.products
     * for(let obj in productList){
     *    let id = obj.productId
     *    let sku = obj.currentSku.skuId
     *    productSkus[id] = sku;
     * }
     *
     *
     *
     */

    //         res.locals.fetcher = response.data;
    //         fs.writeFileSync(path.resolve(__dirname, './fake-data/cleanserScrape.json'), JSON.stringify(response.data))
    //         next()
    //     } catch (error) {
    //         console.error(error);
    //         return next(error)
    //   }

    const productList = JSON.parse(testScrape).products;

    let count = 0; //to comment
    for (let obj of productList) {
      let id = obj.productId;
    //   console.log(id);
      let sku = obj.currentSku.skuId;
    //   console.log(sku);
      productSkus[id] = sku;
      if (count++ > 3) break; //to comment
    }

    const productInfo = [];

    for (let id in productSkus) {
      const product = {
        method: "GET",
        url: "https://sephora.p.rapidapi.com/us/products/v2/detail",
        params: {
          productId: id,
          preferedSku: productSkus[id],
        },
        headers: {
          "X-RapidAPI-Key":
            "95f0f70e1bmsh5e365d235aea13ep10a60djsne0255bcdc733",
          "X-RapidAPI-Host": "sephora.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(product);
        console.log("were back from product fecth");
        const data = response.data;
        // console.log(data);

        //
        const title = data.productDetails.displayName;
        const brand = data.productDetails.brand.displayName;
        const skin = data.productDetails.longDescription;
        //skinParse(skin)
        // console.log("title: ", title, "\nbrand: ", brand, "\nskin: ", skin);

        const rawDescription = data.currentSku.ingredientDesc; //need to delete up to <br><br> then array of ingredient to comma
        //ingredientParse(rawDescription)
        // console.log("rawDescription: ", rawDescription);
        productInfo.push({
          title,
          brand,
          skin,
          rawDescription,
        });
      } catch (error) {
        console.error(error);
        return next(error);
      }
    }

    fs.writeFileSync(
      path.resolve(__dirname, "./fake-data/productInfo.json"),
      JSON.stringify(productInfo)
    );
    res.locals.fetcher = "great job"; //data
    next();
  },

  getProducts: (req, res, next) => {
    const params = [];
    const getQuery = ``;
    const productListFromDB = db.query(getQuery, params);
  },

  addProduct: (product) => {
    /*
    


    ingredientIds = []
    for(let i of product.ingredient_list){
        const param = [i]
        db.query(`INSERT INTO ingredients (name) values ($1)`);
        const id = db.query(`SELECT _id FROM ingredients WHERE name = i`)
        ingredientIds.push(id)
    }

    const params = [product.name, product.brand]
    db.query(` INSERT INTO products (_id, name, brand_name, category, skin_type)
  VALUES ('Test Product', 'Test Brand', 'Moisturizer', 'Sensitive')`)



*/

    const addQuery = ``;
    const productListFromDB = db.query(addQuery);
  },
};

module.exports = sqlController;
