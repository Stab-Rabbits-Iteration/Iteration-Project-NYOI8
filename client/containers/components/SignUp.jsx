import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  // keep track of what the user types as its username and password in the form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const makeUser = (e) => {
    e.preventDefault();
    fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log('data after making user: ', data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signUp-box">
      <form id="signupForm" onSubmit={makeUser}>
        <input
          name="username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="username"
          value={username}
        />
        <input
          name="password"
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          value={password}
        />
        <input type="submit" value="Sign Up" />
      </form>
      <Link to={'/home'} id="signupLink">
        <button id="signupButton" type="button">
          Home
        </button>
      </Link>
    </div>
  );
};

export default SignUp;
