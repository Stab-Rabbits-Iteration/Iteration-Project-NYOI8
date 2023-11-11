import React from "react";
import { Routes, Route } from 'react-router-dom';

import LoginContainer from './loginContainer.jsx';
import SignupContainer from "./signupContainer.jsx";
import HomeContainer from "./homeContainer.jsx";


const MainContainer = () => {

  return (
    <div className="mainContainer">
      {/* Either input container or home container goes here... may make sense to use react router to render different components */}
      <Routes>
        // route base: loginContainer
        <Route path='/login' element={<LoginContainer />} />;
        // route 2: if no account or password is wrong
        // signupContainer
        // does this login need a slash or no?? Saw online that slash means that one loads first, but just to confirm
        <Route path='/signup' element={<SignupContainer />} />
      // after the sign up or login
        // route to homeContainer
        <Route path='/' element={<HomeContainer />} />
      </Routes>
    </div>
  )
}

export default MainContainer;