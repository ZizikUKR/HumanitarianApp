import React from 'react';
import ReactDOM from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/App';

import './styles/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Normalize />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);