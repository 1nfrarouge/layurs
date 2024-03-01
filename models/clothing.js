const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const clothingSchema = new Schema({
  category: {
    type: String,
    enum: ['top', 'bottom', 'one-piece', 'outerwear', 'swim', 'intimates', 'accessory', 'jewelry', 'footwear']
  },
  type: {
    type: String
  },
  brand: {
    type: String
  },
  size: {
    type: String
  },
  color: {
    type: String
  },
  occasion: {
    type: String
  },
  season: {
    type: String,
    enum: ['spring', 'summer', 'fall', 'winter']
  },
  stored: {
    type: String
  },
  image: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref:'User'
  }


}, {
  timestamps: true,
});

module.exports = mongoose.model('Clothing', clothingSchema);