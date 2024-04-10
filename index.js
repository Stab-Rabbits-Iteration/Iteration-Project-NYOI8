import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './client/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import styles from './client/scss/styles.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
