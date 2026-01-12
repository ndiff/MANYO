import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This file is provided to satisfy the React project structure requirements.
// However, the actual implementation is a Single Page Application in index.html
// using Vanilla JS as explicitly requested by the user prompt.

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
