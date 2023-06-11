import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainContextProvider from './store/MainContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainContextProvider>
    <App />
  </MainContextProvider>
);