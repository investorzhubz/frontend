import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { PlanContextProvider } from './context/PlanContext';
import { ErrorContextProvider } from './context/ErrorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <ErrorContextProvider>
    <PlanContextProvider>
    <App />
    </PlanContextProvider>
    </ErrorContextProvider>
    
    </AuthContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

