import React, { useState, useEffect } from 'react';
import ProductCardUser from './components/ProductCardUser.jsx';
import '../scss/userPage.scss';
import { Navigate } from 'react-router-dom';

const UserPage = ({ ssid }) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ssid will be passed down as a prop send to the server in fetch
  if (!ssid) {
    return <Navigate to="/login" replace />;
  }
  useEffect(() => {
    setIsLoading(true);
    fetch('/user/getProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      // body: JSON.stringify(ssid)
      body: JSON.stringify({ ssid: 1 }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('here is res', res);
        setProductsData(res);
        setIsLoading(false);
      })
      .catch((err) => console.log('Error from UserPage fetch:', err));
  }, []);
  console.log('productsData', productsData);

  if (!isLoading) {
    const products = [];
    for (let i = 0; i < productsData.length; i++) {
      products.push(<ProductCardUser productsData={productsData[i]} />);
    }

    return (
      <div className="productsListContainer">
        <h1>Your Products</h1>
        <div className="productsList">{products}</div>
      </div>
    );
  } else {
    return (
      <div className="productsListContainer">
        <h1>Your Products</h1>
        <div className="productsList">
          <p>You have no products</p>
        </div>
      </div>
    );
  }
};

export default UserPage;
