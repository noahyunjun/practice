import React, { useState } from "react";
import Board from "./Board";
import NavigationButton from "../../NavigationButton";

const Game = () => {
  const [history, setHistory] = useState([
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
    let description =
      move > 0 ? `Go to move #${move} ${step.location}` : "Go to game start";
    return (
      <li key={move} className="mb-2">
        <button
          onClick={() => jumpTo(move)}
          className="px-3 py-1 bg-blue-500 dark:bg-blue-700 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-800"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex flex-col items-center">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="mt-4 md:mt-0">
        <ol className="list-decimal list-inside">{moves}</ol>
      </div>
      <NavigationButton
        key="/"
        path="/"
        label="Home"
        className="dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
};

export default Game;
