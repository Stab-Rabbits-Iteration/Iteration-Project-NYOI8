import React, { useState } from 'react';
import '../../scss/login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // The fetch request function about the verifing the user
  const verifyUser = (e) => {
    e.preventDefault();
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then((res) => res.json())
      .then((data) => console.log('data after verifing user: ', data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="logIn-Container">
      <h1>Login</h1>
      <div className="logIn-box">
        <form id="loginForm" onSubmit={verifyUser}>
          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
          <input
            name="password"
            type="text"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <input id="login-btn" type="submit" value="login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
