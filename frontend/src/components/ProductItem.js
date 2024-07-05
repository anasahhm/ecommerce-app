import React from 'react';

const ProductItem = ({ product }) => (
  <div className="product-item">
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p className="price">${product.price}</p>
    <img src={product.imageUrl} alt={product.name} />
  </div>
);

export default ProductItem;
