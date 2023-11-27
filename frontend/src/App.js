import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
// import Login from './components/Login';
// import Header from './components/Header';
import { Routes,Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="app">
     
      
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      {/* <Route path="/login" element={<Login />} /> */}
      
    </Routes>
    </div>
  );
}

export default App;
