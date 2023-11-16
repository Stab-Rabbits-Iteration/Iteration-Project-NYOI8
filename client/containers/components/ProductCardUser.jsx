import React from 'react';
import '../../scss/userPage.scss';

const ProductCardUser = ({ productsData }) => {
  return (
    <div className='productCardUser'>
      <img src="" alt={productsData.image} />
      <h3>{productsData.product_type}: {productsData.name}</h3>
      {/* <h4>{productsData.product_type}</h4> */}
      <p>For {productsData.skin_type} skin</p>
      <p>${productsData.price}</p>
    </div>
  );
};

export default ProductCardUser;
