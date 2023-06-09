import React from 'react';
import reportWebVitals from './reportWebVitals';
import Router from './application/Router';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.scss';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Router />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
