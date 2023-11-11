const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  // mongo will create a unique id for the specific document for us to access
  firstName: { type: String, required: true }, // unique: true?
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  //
  skinType: { type: String },
  issues: { type: String },
  allergies: { type: String },
  //
  currentRoutine: {
    toner: { type: String },
    essense: { type: String },
    moisturizer: { type: String },
    spf: { type: String },
  },
});

module.exports = mongoose.model('Client', clientSchema);
