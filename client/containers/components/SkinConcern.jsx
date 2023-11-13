import React from 'react';


const SkinConcern = props => {


  return (
    <>
      <h3>Skin Concern:</h3>
      <ul className={props.concernClass}>
        <button className={props.concernButton}>Oiliness</button>
        <button className={props.concernButton}>Dryness</button>
        <button className={props.concernButton}>Dullness</button>
        <button className={props.concernButton}>Pore Appearance</button>
        <button className={props.concernButton}>Acne and Blemishes</button>
      </ul>
    </>
  )
}

export default SkinConcern;