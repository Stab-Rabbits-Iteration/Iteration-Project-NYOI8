import React, { useState } from 'react';
import Question3 from './Question3.jsx';

const Question2 = () => {
  const [open, setOpen] = useState(false);
  const [skinType, setSkinType] = useState('');

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        what is your skin like?
      </button>
      {open && (
        <div>
          <button
            onClick={() => {
              setSkinType('dry skin');
            }}
          >
            dry
          </button>
          <button
            onClick={() => {
              setSkinType('oily skin');
            }}
          >
            oily
          </button>
        </div>
      )}
      <p>click submit after picking!</p>
    </div>
  );
};

export default Question2;
