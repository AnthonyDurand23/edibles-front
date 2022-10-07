import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from './components/ScrollToTop';
import store from './redux/store';

import App from './components/App';

import './tailwind.css';

const content = (
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Provider store={store}>
          <App />
        </Provider>
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);

const mountDomElement = document.getElementById('root');

render(content, mountDomElement);
