import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Todos/index.css';
import { Todos } from './components/Todos';
import { Test } from './components/TestComp/Test';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todos />
    <Test />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals