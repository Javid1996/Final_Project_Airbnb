import React from 'react';
import './App.css';
import Home from './components/Home';
// import Login from './components/Login.js';
// import Header from './components/Header';
import { Routes,Route, Link } from "react-router-dom"
import CardDetails from './components/CardDetails';
import Profile from './components/Profile'

function App() {
  return (
    <div className="app">
     
      
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/profile" element={<Profile />} />
      <Route  path="/:event_id" element={<CardDetails/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
