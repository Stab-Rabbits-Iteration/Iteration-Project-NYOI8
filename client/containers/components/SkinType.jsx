import React from 'react';


const SkinType = props => {


  return (
    <>
      <h3>Skin Type:</h3>
      <ul className="props.typeClass">
        <button className={props.buttonClass}>Normal</button>
        <button className={props.buttonClass}>Dry</button>
        <button className={props.buttonClass}>Oily</button>
        <button className={props.buttonClass}>Combination</button>
      </ul>
    </>
  )
}

export default SkinType;