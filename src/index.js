import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
Amplify.configure(awsExports);
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
