import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Table from './pages/Table';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="nav nav-tabs">
            <li>
              <NavLink to="/table">Table</NavLink>
            </li>
            <li>
              <NavLink to="/drag">Drag</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/animation">Animation</NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/table" element={<Table />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);
