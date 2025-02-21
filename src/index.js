// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';  // Make sure this path is correct
import Portfolio from './Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);