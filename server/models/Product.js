const mongoose = require ('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        min: 0,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        min: 5.00
    },
    image: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
