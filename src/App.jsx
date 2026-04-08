import { useState } from "react";
import "./App.css";

function App() {
  const [playerMove, setPlayerMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("");
  const [rounds, setRounds] = useState(0);
  const [history, setHistory] = useState([]);
  const [streak, setStreak] = useState(0);

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

    setRounds((prev) => prev + 1);

    setHistory((prev) => [
      ...prev,
      { player: move, computer: compMove, result: gameResult },
    ]);

    if (gameResult === "You Win") {
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const resetGame = () => {
    setPlayerMove("");
    setComputerMove("");
    setResult("");
    setRounds(0);
    setHistory([]);
    setStreak(0);
  };

  return (
    <div className="container">
      <h1>🎮 Rock Paper Scissors</h1>

      <div className="buttons">
        <button onClick={() => handleClick("rock")}>🪨 Rock</button>
        <button onClick={() => handleClick("paper")}>📄 Paper</button>
        <button onClick={() => handleClick("scissors")}>✂️ Scissors</button>
      </div>

      <button className="reset" onClick={resetGame}>
        Reset 🔄
      </button>

      <div className="info">
        <h3>Rounds: {rounds}</h3>
        <h3>🔥 Win Streak: {streak}</h3>

        <p>You: {playerMove || "-"}</p>
        <p>Computer: {computerMove || "-"}</p>
        <h2>{result || "Make your move!"}</h2>
      </div>

      <div className="history">
        <h3>📜 Move History</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.player} vs {item.computer} → {item.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;