import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Create the root element for rendering React components
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Render the App component within BrowserRouter for routing
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// Report web vitals for performance measurement
reportWebVitals();
