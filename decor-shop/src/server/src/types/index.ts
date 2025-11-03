export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Transaction {
    id: string;
    items: CartItem[];
    totalAmount: number;
    date: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
}