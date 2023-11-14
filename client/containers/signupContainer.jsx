import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { makeUser } from '../slices/userSlice';
// import InputForm from './components/inputForm.jsx'
// import Preferences from './components/Preferences.jsx';
import SignupForm from './components/SignupForm.jsx';
import Preferences from './components/Preferences.jsx';

const SignupContainer = (props) => {


  // const skinType = useSelector((state) => state.user.skinType);
  // const skinConditions = useSelector((state) => state.user.skinConditions);
  // const allergies = useSelector((state) => state.user.allergies);

  // const dispatch = useDispatch();

  return (
    <div className={props.containerClass}>
      <SignupForm componentClass='signUpBox'/>
    </div>
  );
};

export default SignupContainer;