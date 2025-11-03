import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    images: [{ type: String }],
    organic: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

const Product = model('Product', productSchema);

export default Product;