// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Portfolio from './Portfolio';
import { ThemeProvider } from './hooks/useTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  </React.StrictMode>
);