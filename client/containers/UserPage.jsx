import React, { useState, useEffect } from 'react';
import ProductCardUser from './components/ProductCardUser.jsx';
import { Navigate } from 'react-router-dom';

const UserPage = ({ ssid, setSsid }) => {
  const [productsData, setProductsData] = useState([]);

  // ssid will be passed down as a prop send to the server in fetch
  if (!ssid) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    fetch('/user/getProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      // body: JSON.stringify(ssid)
      body: JSON.stringify(1),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProductsData(res);
      })
      .catch((err) => console.log('Error from UserPage fetch:', err));
  }, []);
  const products = [];
  for (let i; i < productsData.length; i++) {
    products.push(<ProductCardUser productsData={productsData[i]} />);
  }

  return (
    <div className="productsList">
      <h1>Your Products</h1>
      {products}
    </div>
  );
};

export default UserPage;
