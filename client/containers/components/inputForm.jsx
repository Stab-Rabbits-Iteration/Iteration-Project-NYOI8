import React from 'react';
import { Link } from 'react-router-dom';

const InputForm = (props) => {
  return (
    <div className="loginBox">
      <form id="loginForm">
        <div id="loginHeaderBox">
          <h2 id="loginHeader">Peau Humaine</h2>
          <img
            id="loginHeaderImage"
            src={require('../../assets/images/skincare_products.png')}
          />
        </div>
        <div className="inputField">
          <input type="text" name="username" placeholder="Enter Username" />
        </div>
        <div className="inputField">
          <input type="text" name="password" placeholder="Enter Password" />
        </div>
        <Link to="/home" id="loginLink">
          <button id="loginButton" type="button">
            Login
          </button>
        </Link>
      </form>
      <Link to="/signup" id="signupLink">
        <button id="signupButton" type="button">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default InputForm;
