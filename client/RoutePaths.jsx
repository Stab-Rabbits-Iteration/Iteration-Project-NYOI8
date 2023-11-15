import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from './containers/components/Login.jsx';
import Signup from './containers/components/Signup.jsx';
import SearchPage from './containers/components/searchPage.jsx';

const RoutePaths = ({ ssid, setSsid }) => {
  const element = useRoutes([
    { path: '/', element: <Login ssid={ssid} setSsid={setSsid}/> },
    { path: '/signup', element: <Signup ssid={ssid} setSsid={setSsid}/> },
    { path: '/searchPage', element: <SearchPage/> }
  ]);
  return element;
};

export default RoutePaths;
