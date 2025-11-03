import React from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';
import './Cart.css'; // Assuming you have some CSS for styling

const Cart: React.FC = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className="cart-container">
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <CartItem 
                                key={item.id} 
                                item={item} 
                                onRemove={() => removeFromCart(item.id)} 
                            />
                        ))}
                    </div>
                    <button onClick={handleClearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default Cart;