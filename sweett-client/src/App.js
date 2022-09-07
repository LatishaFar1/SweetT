import React, {useEffect, useState} from 'react';
import './App.css';
import NewTea from './components/NewTea';
import ShowTea from './components/ShowTea';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {


  return (
    <div className="App">
      <NavBar/>

      <Router>
        <Routes>

          <Route path='/' element={<Home/>} />
         

        </Routes>

      </Router>

     
    </div>
  );
}

export default App;
