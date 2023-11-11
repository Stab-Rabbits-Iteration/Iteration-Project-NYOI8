//sql
const db = require('../models/productSqlModels.js')
const fs = require('fs')

const sqlController = {

    //choose product category (moisturizer, etc.)
    initialScrape: async () => {
  
        await fetch( 'https://sephora.p.rapidapi.com/categories/list', {
            params: {
                categoryId: 'cat60099', //this we will hard code each time
                pageSize: '50',
                currentPage: '1'
            },
            headers: {
                'X-RapidAPI-Key': '95f0f70e1bmsh5e365d235aea13ep10a60djsne0255bcdc733',
                'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })


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