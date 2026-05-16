import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;