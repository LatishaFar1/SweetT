import React from 'react';
import './App.css';
import ShowTea from './components/ShowTea';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {


  return (
    <div className="App">

      <Router>
      <NavBar/>
        <Routes>

          <Route path='/' element={<Home/>} />
         
          <Route path='/tea' element={<ShowTea/>} />

          <Route path='/about' element={ <About/>} />
      
        </Routes>

      </Router>

     
    </div>
  );
}

export default App;
