import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

export const addToCart = async (product) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/cart`, product);
        return response.data;
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw error;
    }
};

export const checkout = async (cartItems) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/checkout`, cartItems);
        return response.data;
    } catch (error) {
        console.error('Error during checkout:', error);
        throw error;
    }
};

export const exportTransactionsToExcel = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transactions/export`, {
            responseType: 'blob',
        });
        return response.data;
    } catch (error) {
        console.error('Error exporting transactions to Excel:', error);
        throw error;
    }
};