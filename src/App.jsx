import { useState } from "react";
import './App.css'

function App() { 
  let [playerMove , setPlayerMove] = useState("");


  return (
    <div>
      <h1>Computer : User</h1>
      <button onClick = {() => setPlayerMove("rock")}>Rock 🪨</button>
      <button>onClick = {() => setPlayerMove("Paper")}Paper 📄</button>
      <button>onClick = {() => setPlayerMove("Scissor")}Scissor ✂️</button>
       <p>Your Move: {playerMove}</p>
    </div>
  )
}

export default App
