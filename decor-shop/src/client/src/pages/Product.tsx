import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../services/api';
import ImageUploader from '../components/ImageUploader';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const data = await fetchProductById(id);
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <ImageUploader productId={product.id} />
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;