import { Request, Response } from 'express';
import { CartItem } from '../types';
import { saveCartToExcel } from '../services/excelExport';

let cart: CartItem[] = [];

export const addToCart = (req: Request, res: Response) => {
    const item: CartItem = req.body;
    cart.push(item);
    res.status(201).json({ message: 'Item added to cart', cart });
};

export const removeFromCart = (req: Request, res: Response) => {
    const { id } = req.params;
    cart = cart.filter(item => item.id !== id);
    res.status(200).json({ message: 'Item removed from cart', cart });
};

export const getCart = (req: Request, res: Response) => {
    res.status(200).json(cart);
};

export const clearCart = (req: Request, res: Response) => {
    cart = [];
    res.status(200).json({ message: 'Cart cleared' });
};

export const exportCartToExcel = (req: Request, res: Response) => {
    saveCartToExcel(cart)
        .then(() => {
            res.status(200).json({ message: 'Cart exported to Excel' });
        })
        .catch(err => {
            res.status(500).json({ message: 'Error exporting cart', error: err });
        });
};