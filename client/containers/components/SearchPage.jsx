import React, { useState } from 'react';
import Question1 from './Question1.jsx';
import Question2 from './Question2.jsx';
import Question3 from './Question3.jsx';
import SearchResults from './SearchResults.jsx';

const SearchPage = () => {
  const [count, setCount] = useState(0);
  const array = [Question1, Question2, Question3, SearchResults];

  const ClickHandler = () => {
    if (count < array.length - 1) {
      setCount(count + 1);
    }
  };
  const ReturnedDiv = array[count];

  return (
    <div>
      <div>{<ReturnedDiv />}</div>
      <button onClick={ClickHandler}>submit</button>
    </div>
  );
};

export default SearchPage;
