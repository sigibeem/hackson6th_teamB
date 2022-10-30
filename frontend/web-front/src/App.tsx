import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './component/mainflames/Top';
import Lists from './component/mainflames/Lists';
import Graph from './component/mainflames/Graph';
import './styles/App.css';
import background from './images/background/mobileBackground.jpg'

const App = React.memo(()=>{
  return (
    <div className="background" style={{ backgroundImage: `url(${background})`}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/weapons" element={<Lists />} />
        <Route path="/result-graph" element={<Graph />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
})

export default App;
