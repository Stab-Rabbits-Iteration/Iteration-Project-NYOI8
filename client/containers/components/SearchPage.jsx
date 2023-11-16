import React, { useState } from 'react';
import Question1 from './Question1.jsx';
import Question2 from './Question2.jsx';
import Question3 from './Question3.jsx';
import SearchResults from './SearchResults.jsx';
import { Navigate } from 'react-router-dom';

const SearchPage = ({ ssid }) => {
  const [click, setClick] = useState(true);
  const [price, setPrice] = useState('');
  const [skinType, setSkinType] = useState('');
  const [product, setProduct] = useState('');
  const [count, setCount] = useState(0);

  if (!ssid) {
    return <Navigate to="/login" replace />;
  }

  console.log('price:', price);
  console.log('skinType:', skinType);
  console.log('product:', product);

  // const array = [
  //   <Question1 key={0} setProduct={setProduct} />,
  //   <Question2 key={1} setSkinType={setSkinType} />,
  //   <Question3 key={2} setPrice={setPrice} />,
  //   SearchResults,
  // ];

  // const ClickHandler = () => {
  //   if (count < array.length - 1) {
  //     setCount(count + 1);
  //   }
  // };
  // const ReturnedDiv = array[count];

  let component;
  if (product === '') {
    component = <Question1 setProduct={setProduct} />;
  } else if (skinType === '') {
    component = <Question2 setSkinType={setSkinType} />;
  } else if (price === '') {
    component = <Question3 setPrice={setPrice} />;
  } else {
    component = <button onClick={s}>submit</button>;
  }

  return <div>{component}</div>;
};

export default SearchPage;
