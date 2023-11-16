import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from './containers/components/Login.jsx';
import Signup from './containers/components/Signup.jsx';
import SearchPage from './containers/components/searchPage.jsx';
import UserPage from './containers/UserPage.jsx';

const RoutePaths = ({ ssid, setSsid }) => {
  const element = useRoutes([
    { path: '/', element: <Login ssid={ssid} setSsid={setSsid}/> },
    { path: '/signup', element: <Signup ssid={ssid} setSsid={setSsid}/> },
    { path: '/searchPage', element: <SearchPage/> },
    { path: 'userPage', element: <UserPage ssid={ssid}/> }
  ]);
  return element;
};

export default RoutePaths;
