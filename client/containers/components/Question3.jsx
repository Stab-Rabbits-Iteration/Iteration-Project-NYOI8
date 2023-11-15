import React, { useState } from 'react';
import SearchResults from './SearchResults.jsx';

const Question3 = () => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState('');

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        How much are you willing to spend?
      </button>
      {open && (
        <div>
          <button
            onClick={() => {
              setPrice('under $10');
            }}
          >
            under $20
          </button>
          <button
            onClick={() => {
              setPrice('from $10 to $20');
            }}
          >
            from $10 to $20
          </button>
          <button
            onClick={() => {
              setPrice('$20 and up');
            }}
          >
            go fancy
          </button>
        </div>
      )}
      <p>click submit after clicking!</p>
    </div>
  );
};

export default Question3;
