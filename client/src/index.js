// Component Index.js -- Responsible for rendering the App.js component

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
// Browser Router Object Imported from package

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter Wrapping the imported App.js object "App"
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
