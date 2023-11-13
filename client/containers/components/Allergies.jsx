import React from 'react';


const Allergies = props => {


  return (
    <>
      <h3>Allergies</h3>
      <ul className={props.allergies} >
        <input type="text" className={props.allergiesInput} />
        <input type="text" className={props.allergiesInput} />
        <input type="text" className={props.allergiesInput} />
      </ul>
    </>
  )
}

export default Allergies;