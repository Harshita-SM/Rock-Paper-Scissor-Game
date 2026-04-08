import { useState } from "react";
import './App.css'

function App() { 
  const [playerMove , setPlayerMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("");
  const [rounds, setRounds] = useState(0);

  const getComputerMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
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

  const handleClick = (move) => {
    setPlayerMove(move);

    const compMove = getComputerMove();
    setComputerMove(compMove);

    const gameResult = decideWinner(move, compMove);
    setResult(gameResult);

    setRounds(prev => prev + 1);

      setHistory(prev => [
  ...prev,
  { player: move, computer: compMove, result: gameResult }
]);
  };

  const resetGame = () => {
  setPlayerMove("");
  setComputerMove("");
  setResult("");
  setRounds(0);
  };

  const [history, setHistory] = useState([]);


  return (
    <div>
      <h1>Computer : User</h1>

      <button onClick={() => handleClick("rock")}>Rock 🪨</button>
      <button onClick={() => handleClick("paper")}>Paper 📄</button>
      <button onClick={() => handleClick("scissors")}>Scissors ✂️</button>
      <button onClick={resetGame}>Reset Game 🔄</button>

      <p>Game Started !</p>

      <h3>Rounds Played: {rounds}</h3>

      <p>Your Move: {playerMove}</p>
      <p>Computer Move: {computerMove}</p>
      <h2>Result: {result}</h2>
      <h3>Move History:</h3>
      <ul>
        {history.map((item, index) => (
        <li key={index}>
        You: {item.player} | Computer: {item.computer} → {item.result}
        </li>
         ))}
      </ul>
    </div>
  )
}

export default App;