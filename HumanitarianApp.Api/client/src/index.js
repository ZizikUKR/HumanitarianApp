import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';

import App from './components/app/App';

import './styles/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);