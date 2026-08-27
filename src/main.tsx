import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { GameProvider } from './state/GameProvider';
import './styles.css';

// TODO: Initialize Vercel Analytics for production tracking
// import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GameProvider>
        <App />
      </GameProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
