import { Request, Response } from 'express';
import Product from '../models/product';
import { uploadImage } from '../services/imageStorage';

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

// Get a single product by ID
export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
    const { name, description, price, category } = req.body;
    try {
        const newProduct = new Product({ name, description, price, category });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
};

// Update a product
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};

// Upload product image
export const uploadProductImage = async (req: Request, res: Response) => {
    try {
        const imageUrl = await uploadImage(req.file);
        res.status(200).json({ imageUrl });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading image', error });
    }
};