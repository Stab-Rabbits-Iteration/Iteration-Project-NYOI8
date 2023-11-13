const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  // mongo will create a unique id for the specific document for us to access
  userName: { type: String, required: true },
  password: { type: String, required: true },
  //
  skinType: { type: String },
  issues: { type: String },
  allergies: { type: String },
  //
  // currentRoutine: {
  //   cleanser: {type: String},
  //   toner: { type: String },
  //   essence: { type: String },
  //   moisturizer: { type: String },
  //   spf: { type: String },
  // },
});

module.exports = mongoose.model('Client', clientSchema);
