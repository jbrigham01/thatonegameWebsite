import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Smileybutton from './components/Smileybutton.jsx'
import './App.css'

function App() {  
  return (
    <>
    <Navbar></Navbar>
    <div style={{"width":"80vw", 'marginLeft':'auto','marginRight':'auto'}}>
      <h1>What is ThatOneGame?</h1>
      <h2>It's the best name for this game I could come up with..</h2>
      <h3>But besides that...!</h3>
      <div style={{"display":"inline",width:"auto", "flexDirection":"column", 'marginLeft':'auto','marginRight':'auto'}}>
      <img src="./src/assets/intro1.png"></img>
      <img src="./src/assets/intro2.png"></img>
      </div>
      <p></p>
      <h2>It's an action rpg for Mac/PC!</h2>
      <div style={{"display":"inline",width:"auto", "flexDirection":"column", 'marginLeft':'auto','marginRight':'auto'}}>
      <img src="./src/assets/fight1.png"></img>
      <img src="./src/assets/fight2.png"></img>
      </div>
      <h2>Where you fight things!</h2>
    </div>
    <Smileybutton></Smileybutton>
    </>

  )
}

export default App
