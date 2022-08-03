const mongoose = require('mongoose');

const Product = require('./Product');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;