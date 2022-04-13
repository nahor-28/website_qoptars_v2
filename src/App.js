import React from 'react'

import './App.css';

import { Navbar } from './components/index'
import { Gallery, Home, Specs } from './pages/index'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path='/specs' element={ <Specs /> }/>
        <Route path='/gallery' element={ <Gallery /> }/>
      </Routes>  
    </React.Fragment>

  );
}

export default App;
