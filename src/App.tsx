import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import Cars from './pages/Cars';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;