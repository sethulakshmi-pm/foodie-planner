import './index.css';

import App from './App';
import { MealProvider } from './contexts/MealContext';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Correct import for React 18

// Create a root and render the app using createRoot() for React 18+
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <MealProvider>
    <App />
  </MealProvider>
);
