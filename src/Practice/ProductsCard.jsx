import React from 'react';

const ProductsCard = ({ id, title, price, image }) => {
  return (
    <div className="card">
      <img src={image } alt={title} />
      <h3>{title}</h3>
      <h4>${price}</h4>
    </div>
  );
};

export default ProductsCard;
