import React from 'react';
import { Link } from "react-router-dom";
const HomeContainer = () => {

  return (

    <div className='homeContainer'>
      {/* Let's use 3 links during development to access the different components during desing */}
      <nav id="navbar">
        <ul >
          <li><Link to="/login" >Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>

    </div>
  )
};

export default HomeContainer;