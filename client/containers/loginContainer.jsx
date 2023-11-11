import React from "react";
import InputForm from "./components/inputForm";


//We need to add links so we are able to switch pages. Do here and on sign up and on home container
import { Link } from "react-router-dom";

const LoginContainer = (props) => {



  return (
    <div className='loginContainer'>
      <InputForm />
    </div>
  )
};

export default LoginContainer;