import React, { useState } from 'react';
import Question1 from './Question1.jsx';
import Question2 from './Question2.jsx';
import Question3 from './Question3.jsx';

const SearchPage = () => {
  const [click, setClick] = useState(true);
  const [price, setPrice] = useState('');
  const [skintype, setSkinType] = useState('');
  const [product, setProduct] = useState('');
  const [count, setCount] = useState(0);

  const [itemlist, setItemList] = useState([]);

  const submitHandler = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: price,
        skintype: skintype,
        product: product,
      }),
    };
    fetch('/api', requestOptions)
      .then((data) => data.json())
      .then((data) => setItemList(data))
      .catch((error) => {
        return { error: error };
      });
  };
  const restart = () => {
    setPrice('');
    setSkinType('');
    setProduct('');
  };

  let component;
  if (product === '') {
    component = <Question1 setProduct={setProduct} />;
  } else if (skintype === '') {
    component = <Question2 setSkinType={setSkinType} />;
  } else if (price === '') {
    component = <Question3 setPrice={setPrice} />;
  } else {
    component = (
      <div product={product} skintype={skintype} price={price}>
        you have {skintype} and are looking for {product} that is {price}!
        <button onClick={submitHandler}>submit</button>
        <button onClick={restart}>start over</button>
      </div>
    );
  }

  return <div>{component}</div>;
};

export default SearchPage;
