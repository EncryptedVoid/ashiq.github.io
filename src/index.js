import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { MediaProvider } from './context/MediaContext';
import './styles/global.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MediaProvider>
      <App />
    </MediaProvider>
  </React.StrictMode>
);