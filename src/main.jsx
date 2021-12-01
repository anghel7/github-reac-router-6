import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';

let rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
