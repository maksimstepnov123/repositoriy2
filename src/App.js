import React from 'react'
import './App.css'
import Contact from './components/Contact';
import Dessiners from './components/Dessiners';
import Menushka from './components/Menushka';
import Pakages from './components/Pakages';
import Showcase from './components/Showcase';


function App() {
  return (
  <>
  <Menushka/>
  <div className='all'>
    <Showcase/>
    <Dessiners/>
    <Pakages/>
    <Contact/>
  </div>
  </>
  )
}

export default App;