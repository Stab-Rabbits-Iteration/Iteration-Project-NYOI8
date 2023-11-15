import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ ssid }) => {
  return (
    <ul>
      <li>
        <Link to='/' className='navLink'>
          Login
        </Link>
      </li>
      <li>
        <Link to='/signup' className='navLink'>
          Sign up
        </Link>
      </li>
      <li>
        <Link to='/searchPage' className='navLink'>
          Search Page
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
