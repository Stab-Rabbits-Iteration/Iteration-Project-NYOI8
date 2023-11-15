import React, { useState } from 'react';
// import Question2 from './Question2.jsx';
const Question1 = () => {
  const [product, setProduct] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Choose the skin product you want
      </button>
      {open && (
        <div>
          <button
            onClick={() => {
              setProduct('face wash');
            }}
          >
            face wash
          </button>
          <button
            onClick={() => {
              setProduct('lotion');
            }}
          >
            lotion
          </button>
          <button
            onClick={() => {
              setProduct('toner');
            }}
          >
            toner
          </button>
        </div>
      )}
      <p>click submit after picking!</p>
    </div>
  );
};

export default Question1;
