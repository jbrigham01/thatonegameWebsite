import { useState } from 'react'
import Navbar from './components/Navbar'
import Smileybutton from './components/smileybutton'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <div>
    <Navbar></Navbar>
    </div>
    <div>
      <h1>Text</h1>
      <p>This is thatonegame!</p>
    </div>
    <Smileybutton></Smileybutton>
    </>

  )
}

export default App
