import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './main/Calculator';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Calculadora</h1>
      <Calculator />
    </div>    
  </React.StrictMode>,
  document.getElementById('root')
);
