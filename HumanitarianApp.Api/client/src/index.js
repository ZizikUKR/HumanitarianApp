import React from 'react';
import { createRoot } from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/App';

import './styles/style.scss';

// ReactDOM.render(
//   <React.StrictMode>
//     <Normalize />
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Normalize />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);