import React from 'react';
import { Link } from "react-router-dom";
import UserProfile from './UserProfile.jsx';

const HomeContainer = (props) => {

  return (

    <div className={props.containerClass}>
      {/* Let's use 3 links during development to access the different components during desing */}
      <nav id="navbar">
        <ul id={props.navListId}>
          <li className={props.navListItemId}><Link to="/login" >Login</Link></li>
          <li className={props.navListItemId}><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
      <UserProfile componentClass='userProfile' />
    </div>
  )
};

export default HomeContainer;