import React, {useEffect, useState} from 'react';
import './App.css';
import NewTea from './components/NewTea';
import ShowTea from './components/ShowTea';
import NavBar from './components/NavBar';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <ShowTea/>
      <NewTea/>
     
    </div>
  );
}

export default App;
