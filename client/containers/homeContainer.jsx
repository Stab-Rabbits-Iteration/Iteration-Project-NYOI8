import React from 'react';
import { Link } from "react-router-dom";
const HomeContainer = () => {

  return (
    <div>
      <nav></nav>
      {/* Let's use 3 links during development to access the different components during desing */}
      <Link to="/login" >Login</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  )
};

export default HomeContainer;