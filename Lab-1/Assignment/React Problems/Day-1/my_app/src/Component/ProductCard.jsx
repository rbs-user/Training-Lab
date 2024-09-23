import React from 'react';

const ProductCard = ({ product }) => {
  console.log(product.image);
  
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <img src={product.image}  alt={product.title} style={{ width: '350px', height: '450px', objectFit: 'cover'}} />
      <h3 className="text-lg font-bold mt-4">{product.title}</h3>
      <p className="text-gray-700">${product.price}</p>
      <p className="text-gray-500 mt-2">
        {product.description.length > 100
          ? `${product.description.substring(0, 100)}...`
          : product.description}
      </p>
    </div>
  );
};

export default ProductCard;
