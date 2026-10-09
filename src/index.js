import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const SPLASH_MIN_MS = 5000;

const root = ReactDOM.createRoot(document.getElementById('root'));

function hideSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;
  splash.classList.add('splash-hide');
  setTimeout(() => splash.remove(), 700);
}

// L'écran de chargement reste affiché au moins 5 secondes depuis l'ouverture
// de la page ; le site est affiché dessous juste avant qu'il disparaisse.
const remaining = Math.max(0, SPLASH_MIN_MS - performance.now());
setTimeout(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  setTimeout(hideSplash, 150);
}, remaining);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
