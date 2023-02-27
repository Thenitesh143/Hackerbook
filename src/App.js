import React from 'react'

import Home from './pages/Home';
import Salesforce from './pages/Salesforce'
import Carrer from './pages/Carrer'
import Corporates from './pages/Corporate'
import OnlineTraining from './pages/OnlineTraining'
import Placement from './pages/Placement'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sales" element={<Salesforce />} exact />
        <Route path="/corporal" element={<Corporates />} exact />
        <Route path="/online" element={<OnlineTraining />} exact />
        <Route path="/place" element={<Placement />} exact />
        <Route path="/carrer" element={<Carrer />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
