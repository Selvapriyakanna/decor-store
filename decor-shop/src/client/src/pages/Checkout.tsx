import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { processPayment } from '../services/api';

const Checkout: React.FC = () => {
    const { cartItems, clearCart } = useCart();
    const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

    const handlePayment = async () => {
        try {
            const response = await processPayment(cartItems);
            if (response.success) {
                setPaymentStatus('Payment successful!');
                clearCart();
            } else {
                setPaymentStatus('Payment failed. Please try again.');
            }
        } catch (error) {
            setPaymentStatus('An error occurred during payment.');
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <button onClick={handlePayment}>Pay Now</button>
            {paymentStatus && <p>{paymentStatus}</p>}
        </div>
    );
};

export default Checkout;