import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginContainer from './LoginContainer.jsx';
import SignupContainer from "./SignupContainer.jsx";
import HomeContainer from "./HomeContainer.jsx";


const MainContainer = (props) => {

  return (
    <div className={props.containerClass}>
      {/* Either input container or home container goes here... may make sense to use react router to render different components */}
      <header id={props.headerId}><p><em>Peau Humaine</em></p><img className='headerImage' src={require('../assets/images/skincare_products.png')} /></header>

      <Routes>
        // route base: loginContainer
        {/* <Route path="/" element={} /> */}
        <Route path='/' element={<LoginContainer containerClass='loginContainer' />} />;
        <Route path='/home' element={<HomeContainer containerClass='homeContainer' navListId='navList' navListItemId='navListItem' />} />;
        // route 2: if no account or password is wrong
        // signupContainer
        // does this login need a slash or no?? Saw online that slash means that one loads first, but just to confirm
        <Route path='/signup' element={<SignupContainer containerClass='signupContainer' />} />
      // after the sign up or login
      // route to homeContainer
      </Routes>
    </div>
  )
}

export default MainContainer;