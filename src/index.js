import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Agenda from './components/Agenda/Agenda';
import Users from './components/Team/Users';
import Clients from './components/Clients/Clients';
import Library from './components/Library/Library';
import Pay from './components/Pay/Pay';
import Statistic from './components/Statistic/Statistic';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Statistics from './components/right-components/Statistics';
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="agenda" element={<Agenda />} />
        <Route path="users" element={<Users />} />
        <Route path="clients" element={<Clients />} />
        <Route path="library" element={<Library />} />
        <Route path="pay" element={<Pay />} />
        <Route path="statistic" element={<Statistic />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
