import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Top from './mainflames/Top';
import Lists from './mainflames/Lists';
import Graph from './mainflames/Graph';
import './styles/App.css';
import background from './images/background/mobileBackground.jpg'
import { FiMenu } from 'react-icons/fi';

const App = React.memo(()=>{
  const navigate = useNavigate();
  return (
    <div className="background" style={{ backgroundImage: `url(${background})`}}>
      <header>
        <h1 onClick={() => navigate('/')}>くらべてみなイカ？</h1>
        <FiMenu />
      </header>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/weapons" element={<Lists />} />
        <Route path="/result-graph" element={<Graph />} />
      </Routes>
      <footer>
        ここがfooterです
      </footer>
    </div>
  );
})

export default App;
