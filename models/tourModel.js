const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'tours should have name']
  },
  rating: {
    type: Number,
    default: 4.8
  },
  price: {
    required: [true, 'a price is required'],
    type: Number
  }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
