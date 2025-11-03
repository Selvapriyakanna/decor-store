import React from 'react';

interface CartItemProps {
    item: {
        id: number;
        name: string;
        price: number;
        quantity: number;
        imageUrl: string;
    };
    onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
    const handleRemove = () => {
        onRemove(item.id);
    };

    return (
        <div className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default CartItem;