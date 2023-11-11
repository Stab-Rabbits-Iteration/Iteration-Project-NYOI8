import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { makeUser } from '../slices/userSlice';

const SignupContainer = () => {

  const skinType = useSelector((state) => state.user.skinType);
  const skinConditions = useSelector((state) => state.user.skinConditions);
  const allergies = useSelector((state) => state.user.allergies);

  const dispatch = useDispatch();

  return (
    <div>
      <p>put stuff here</p>
    </div>
  );
};

export default SignupContainer;