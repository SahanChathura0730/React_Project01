import React, { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route pathe="/" exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App
