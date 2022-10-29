import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './mainflames/Top';
import Lists from './mainflames/Lists';
import Graph from './mainflames/Graph';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/weapons" element={<Lists />} />
        <Route path="/result-graph" element={<Graph />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
