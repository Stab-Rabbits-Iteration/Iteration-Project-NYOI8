const { Pool } = require("pg");

const PG_URI =
  "postgres://hzvtxdyi:wOWxnCTZQ0qBFxIIoZGMkEUo2ZG15Pko@suleiman.db.elephantsql.com/hzvtxdyi";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

/* This is a database to store product information. There are 3 main tables:
  - products
  - skin_conditions
  - ingredients

  and thousands of individual tables that will join a given product to its list of ingredients:
  - ingredient_list_#
*/

// We export an object that contains a property called query which returns the invocation
// of pool.query() after logging the query. This is he access point to the database...
module.exports = {
  query: async (text, params, callback) => {
    console.log("executed query: ", text);
    const queryRes = await pool.query(text, params, callback);
    // console.log(queryRes);
    return queryRes;
  },
};
