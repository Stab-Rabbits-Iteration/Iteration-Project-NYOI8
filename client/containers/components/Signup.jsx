import React, { useState } from 'react';
import '../../scss/signup.scss';

const Signup = () => {
  // keep track of what the user types as its username and password in the form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const makeUser = (username, password) => {
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
      .catch((err) => console.log('error making user: ', err));
  };

  return (
    <div className="signUp-Container">
      <h2>Create a Peau Account</h2>
      <div className="signUp-box">
        <form
          id="signupForm"
          onSubmit={(e) => {
            makeUser(username, password);
            e.preventDefault();
          }}
        >
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
          <input id="signup-btn" type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
