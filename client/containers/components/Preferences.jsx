import React from 'react';
import Allergies from './Allergies.jsx';
import SkinType from './SkinType.jsx';
import SkinConcern from './SkinConcern.jsx';

const Preferences = props => {


  return (
    <div className="preferences">

      <SkinType typeClass="skinType" buttonClass="preferenceButton" />

      <SkinConcern />

      <Allergies />

    </div>
  )
}

export default Preferences;