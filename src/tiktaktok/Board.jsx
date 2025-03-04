import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

const Board = ({ xIsNext, squares, onPlay }) => {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares, i);
  }

  const winner = calculateWinner(squares);
  let status;
  let winSpot = [];
  if (winner) {
    winSpot = winner.winSpot;
    status = `Winner: ${winner.man}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { man: squares[a], winSpot: [a, b, c] };
      }
    }
    return null;
  }

  return (
    <div className="text-center">
      <div className="mb-4 text-lg font-semibold">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {squares.map((value, index) => (
          <Square
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
            className={`w-12 h-12 flex items-center justify-center border border-gray-400 
              text-lg font-bold ${
                winSpot.includes(index)
                  ? "bg-green-400"
                  : "bg-white dark:bg-gray-700"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {};

export default Board;
