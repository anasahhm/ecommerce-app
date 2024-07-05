import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      {products.length > 0 ? (
        products.map(product => (
          <ProductItem key={product._id} product={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
