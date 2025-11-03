import React from 'react';
import ProductList from '../components/ProductList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Our Decor Shop</h1>
            <p>Explore our collection of unique decor items including bracelets, resin candle holders, artificial jasmine, oil diya, water diya, vel idiol, and organic products like soya wax candles and alkanet coconut oil lip balm.</p>
            <ProductList />
        </div>
    );
};

export default Home;