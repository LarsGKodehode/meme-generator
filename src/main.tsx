// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';

// CSS
import './assets/css/global.css';
import './assets/css/palettes.css';
import './assets/css/typography.css';
import './index.css';
// Fonts
import './assets/fonts/StintUltraCondensed-Regular.ttf';


/**
 * DEVELOPMENT
 * clears console of error messages between runs
 * @link https://github.com/vitejs/vite/discussions/3143
 */ 
 if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    () => console.clear()
  );
}
// DEVELOPMENT

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <App />
);