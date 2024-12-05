import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState(() => [
    { squares: Array(9).fill(null), location: null },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  function handlePlay(nextSquares, index) {
    const row = Math.floor(index / 3) + 1;
    const col = (index % 3) + 1;
    const location = `(${row}, ${col})`;

    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, location },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    if (currentMove === nextMove) return;
    setCurrentMove(nextMove);
  }

  const moves = history.map((step, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move} ${step.location}`;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={(nextSquares, index) => handlePlay(nextSquares, index)}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
