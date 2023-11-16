import React, { useEffect, useState } from 'react';
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
  const [renderSearch, setRenderSearch] = useState(false);

  const SearchedItemList = () => {
    useEffect(() => {
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
          return { error: error.message };
        });
    }, []);

    return (
      <div>
        here's what we found!
        <div>
          {itemlist.map((el, index) => (
            <div key={index}>
              <p>{el.title}</p>
              <p>{el.link}</p>
              <p>{el.rating}</p>
              <p>{el.unit_price}</p>
              <img src={el.image} alt='' />
            </div>
          ))}
        </div>
      </div>
    );
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
        <button
          onClick={() => {
            setRenderSearch(!renderSearch);
          }}
        >
          submit
        </button>
        <button onClick={restart}>start over</button>
        {renderSearch ? <SearchedItemList /> : null}
      </div>
    );
  }

  return <div>{component}</div>;
};

export default SearchPage;
