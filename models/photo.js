const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const photoSchema = new Schema({
  url: {type: String, required: true},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Photo', photoSchema);