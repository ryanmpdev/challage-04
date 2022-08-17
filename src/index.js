import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1