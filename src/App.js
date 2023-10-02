import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
// https://www.omdbapi.com/?apikey=efa5a1e&s=titanic