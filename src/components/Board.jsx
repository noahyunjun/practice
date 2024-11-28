import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";
const Board = ({ xIsNext, squares, onPlay }) => {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  let winSpot = [];
  if (winner) {
    winSpot = winner.winSpot;
    status = "Winner: " + winner.man;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
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
    <>
      <div className="status">{status}</div>
      <div>
        {squares.map((history, index) => {
          return index % 3 === 0 ? (
            <>
              <div className="board-row"></div>
              <Square
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
                style={{
                  backgroundColor: winSpot.includes(index) ? "green" : "white",
                }}
              />
            </>
          ) : (
            <Square
              value={squares[index]}
              onSquareClick={() => handleClick(index)}
              style={{
                backgroundColor: winSpot.includes(index) ? "green" : "white",
              }}
            />
          );
        })}
      </div>
    </>
  );
};

Board.propTypes = {};

export default Board;
