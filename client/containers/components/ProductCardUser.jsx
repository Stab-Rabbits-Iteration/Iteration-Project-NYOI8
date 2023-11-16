import React from 'react';

const ProductCardUser = ({ productsData }) => {
  return (
    <div className='productCardUser'>
      <img src={productsData.image} alt="" />
      <h3>{productsData.name}</h3>
      <h4>{productsData.product_type}</h4>
      <p>For {productsData.skin_type} skin</p>
      <p>Price: {productsData.price}</p>
    </div>
  );
};

export default ProductCardUser;
