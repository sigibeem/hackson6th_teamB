import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Top from './mainflames/Top';
import Lists from './mainflames/Lists';
import Graph from './mainflames/Graph';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <header>
      <h1>くらべてみなイカ？</h1>
    </header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/weapons" element={<Lists />} />
        <Route path="/result-graph" element={<Graph />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
