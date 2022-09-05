import React, {useEffect, useState} from 'react';
import './App.css';
import NewTea from './components/NewTea';
import ShowTea from './components/ShowTea';

function App() {


  return (
    <div className="App">
      <ShowTea/>
      <NewTea/>
     
    </div>
  );
}

export default App;
