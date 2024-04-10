import React, { useState } from 'react';
import RoutePaths from './RoutePaths.jsx';
import NavBar from './containers/components/NavBar.jsx';

const App = () => {
  const [ssid, setSsid] = useState('');
  return (
    <div className='routesContainer'>
      <NavBar ssid={ssid}/>
      <RoutePaths ssid={ssid} setSsid={setSsid}/>
    </div>
  );
};

export default App;
