import React from 'react';


const SkinType = props => {


  return (
    <>
      <h3>Skin Type:</h3>
      <form className='props.typeClass' >
        <div>
          <input type='radio' id='Normal' name='skintype' value='Normal' />
          <label for='Normal'>Normal</label>
        </div>
        <div>
          <input type='radio' id='Normal' name='skintype' value='Dry' />
          <label for='Dry'>Dry</label>
        </div>

        <div>
          <input type='radio' id='Oily' name='skintype' value='Oily' />
          <label for='Oily'>Oily</label>
        </div>
        <div>
          <input type='radio' id='Combination' name='skintype' value='Combination'/>
          <label for='Combination'>Combination</label>
        </div>
      </form>
    </>
  );
}

export default SkinType;

