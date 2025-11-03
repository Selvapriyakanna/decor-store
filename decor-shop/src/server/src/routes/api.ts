import { Router } from 'express';
import { getProducts, getProductById } from '../controllers/productsController';
import { addToCart, getCartItems, clearCart } from '../controllers/cartController';
import { createTransaction, exportTransactions } from '../controllers/transactionsController';

const router = Router();

// Product routes
router.get('/products', getProducts);
router.get('/products/:id', getProductById);

// Cart routes
router.post('/cart', addToCart);
router.get('/cart', getCartItems);
router.delete('/cart', clearCart);

// Transaction routes
router.post('/transactions', createTransaction);
router.get('/transactions/export', exportTransactions);

export default router;