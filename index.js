import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './client/App.jsx';

import store from './client/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import styles from './client/scss/styles.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);