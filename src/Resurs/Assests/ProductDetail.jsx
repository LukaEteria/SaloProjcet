// D:/axalia/Salonew/src/Resurs/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../productsData';

const ProductDetail = () => {
  const { id } = useParams(); // იღებს ID პარამეტრს URL-დან
  const product = productsData.find((item) => item.id === parseInt(id)); // ეძებს შესაბამის პროდუქტს

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ProductDetail;
