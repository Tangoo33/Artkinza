// pages/products.js

import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(['Greeting Cards', 'Prints', 'Canvases']);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        // Fetch products (mocked for now)
        const fetchProducts = async () => {
            // Replace with your API call
            const fetchedProducts = [
                { id: 1, name: 'Birthday Card', category: 'Greeting Cards' },
                { id: 2, name: 'Art Print', category: 'Prints' },
                { id: 3, name: 'Canvas Wall Art', category: 'Canvases' }
            ];
            setProducts(fetchedProducts);
            setFilteredProducts(fetchedProducts);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === selectedCategory));
        }
    }, [selectedCategory, products]);

    return (
        <div>
            <h1>Product Listing</h1>
            <div>
                <label>Select Category: </label>
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="All">All</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>{product.name} ({product.category})</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;