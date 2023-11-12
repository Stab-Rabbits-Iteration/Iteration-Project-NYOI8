//sql
const db = require('../models/productSqlModels.js')
const fs = require('fs')
const path = require('path')
const axios = require('axios');

const sqlController = {

    //choose product category (moisturizer, etc.)
    initialScrape: async (req, res, next) => {
        console.log('in here')

        // res.locals.fetcher = {guy: 2};
        // return next();
  
        // fetch( 'https://sephora.p.rapidapi.com/categories/list', {
        //     method: 'GET',
        //     params: {
        //         categoryId: 'cat60099', //this we will hard code each time
        //         pageSize: '50',
        //         currentPage: '1'
        //     },
        //     headers: {
        //         'X-RapidAPI-Key': '95f0f70e1bmsh5e365d235aea13ep10a60djsne0255bcdc733',
        //         'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
        //     }
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log('fecth done')
        //     res.locals.fetcher = data;
        //     console.log(data)
        //     fs.writeFileSync(path.resolve(__dirname, './testDB.js'))
        //      return next();
        // })
        // .catch(err => {
        //     return next(err)
        categoryId: 'cat60099'
        // })

        const options = {
            method: 'GET',
            url: 'https://sephora.p.rapidapi.com/us/products/v2/list',
            params: {
                categoryId: 'cat1230033',
                pageSize: '60',
                currentPage: '1'
            },
            headers: {
                'X-RapidAPI-Key': '95f0f70e1bmsh5e365d235aea13ep10a60djsne0255bcdc733',
                'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
            }
        };
            try {
                const response = await axios.request(options);
                console.log('were back from fecth')
                console.log(response.data);
                // console.log(response)
                res.locals.fetcher = response.data;
                fs.writeFileSync(path.resolve(__dirname, './testDB.js'), JSON.stringify(response.data))
                next()
            } catch (error) {
                console.error(error);
                return next(error)
}


        //TEST:
        // await fetch('https://sephora.p.rapidapi.com/us/products/v2/detail', {
        //     params: {
        //         productId: 'P411387',
        //         preferedSku: '1863588'
        //     },
        //     headers: {
        //         'X-RapidAPI-Key': '95f0f70e1bmsh5e365d235aea13ep10a60djsne0255bcdc733',
        //         'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
        //     }})
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        //     const title = data.productDetails.displayName;
        //     const brand = data.productDetails.brand.displayName;
        //     const skin = data.productDetails.brand.longDescription 
        //     //skinParse(skin)
        //     console.log(skin);
        //     /**
        //      * Skin Type:</b> Normal, Dry, Combination, and Oily <br><br><b>Skincare Concerns:</b> Pores, Acne and Blemishes, and Oiliness
        //      */

        //     const rawDescription = data.currentSku.ingredientDesc; //need to delete up to <br><br> then array of ingredient to comma
        //     //ingredientParse(rawDescription)
        //     console.log(rawDescription);


        // })
  
    },

    getProducts: () => {
        const params = [];
        const getQuery = ``
        const productListFromDB = db.query(getQuery)
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

        const addQuery = ``
        const productListFromDB = db.query(addQuery)
    },

}

module.exports = sqlController;