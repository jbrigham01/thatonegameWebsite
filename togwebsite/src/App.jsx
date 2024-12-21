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
      <h1>What is ThatOneGame</h1>
      <h2>It's a title for something I couldn't name, for one.</h2>
      <h3 style={{"float":"left"}}>But beyond that...!</h3>

      <p>This is thatonegame!</p>

    </div>
    <Smileybutton></Smileybutton>
    </>

  )
}

export default App
