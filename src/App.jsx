import { useState } from "react";
import './App.css'

function App() { 
  let [playerMove , setPlayerMove] = useState("");

const getComputerMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return moves[randomIndex];
};


const handleClick = (move) => {
  setPlayerMove(move);
  const compMove = getComputerMove();
  console.log("Computer:", compMove);
};

const decideWinner = (player, computer) => {
  if (player === computer) return "Draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You Win";
  }

  return "Computer Wins";
};

  return (
    <div>
      <h1>Computer : User</h1>
      <button onClick = {() => handleClick("rock")}>Rock 🪨</button>
      <button>onClick = {() => setPlayerMove("Paper")}Paper 📄</button>
      <button>onClick = {() => setPlayerMove("Scissor")}Scissor ✂️</button>
       <p>Your Move: {playerMove}</p>
    </div>
  )
}

export default App
