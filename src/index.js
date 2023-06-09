import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {MainContextProvider} from './store/MainContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <MainContextProvider>
    <App />
  </MainContextProvider>
  </BrowserRouter>
);