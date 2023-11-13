import React from 'react';
import Allergies from './Allergies.jsx';
import SkinType from './SkinType.jsx';
import SkinConcern from './SkinConcern.jsx';

const Preferences = props => {



  return (
    <div className='preferences'>
      {/* <SkinType typeClass="skinType" buttonClass="preferenceButton"  makeUser={props.makeUser} /> */}

      <h3>Skin Type:</h3>
      <form className='props.typeClass'>
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
          <input
            type='radio'
            id='Combination'
            name='skintype'
            value='Combination'
          />
          <label for='Combination'>Combination</label>
        </div>
      </form>

      {/* <SkinConcern /> */}
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

      {/* <Allergies /> */}
      <h3>Allergies</h3>
      <ul className='Allergies'>
        <input type='text' />
        <input type='text' />
        <input type='text' />
      </ul>

      <button onClick={(e) => props.makeUser(e)}>Create user</button>
    </div>
  );
}

export default Preferences;