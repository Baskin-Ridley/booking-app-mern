
import React from 'react';
import logo from './logo.svg';
import './sass/style.css';
import {BrowserRouter, Router, Route, Routes} from "react-router-dom"

import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
function App() {
  return (
    <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
