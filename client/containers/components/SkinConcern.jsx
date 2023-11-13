import React from 'react';


const SkinConcern = props => {


  return (
    <>
      <h3>Skin Concerns:</h3>
      <form className='skinConcern'>
        <input type='checkbox' className={props.buttonClass} />
        <label for='Oiliness'>Oiliness</label>
        <br></br>

        <input type='checkbox' className={props.buttonClass} />
        <label for='Dullness'>Dullness</label>
        <br></br>

        <input type='checkbox' className={props.buttonClass} />
        <label for='Pore Appearance'>Pore Appearance </label>
        <br></br>

        <input type='checkbox' className={props.buttonClass} />
        <label for='Dryness'>Dryness</label>
        <br></br>
      </form>
    </>
  );
}

export default SkinConcern;
