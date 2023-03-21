import React from "react";

function Square({ children, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {children}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "0");

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        <Square onSquareClick={() => handleClick(0)}>{squares[0]}</Square>
        <Square onSquareClick={() => handleClick(1)}>{squares[1]}</Square>
        <Square onSquareClick={() => handleClick(2)}>{squares[2]}</Square>
        <Square onSquareClick={() => handleClick(3)}>{squares[3]}</Square>
        <Square onSquareClick={() => handleClick(4)}>{squares[4]}</Square>
        <Square onSquareClick={() => handleClick(5)}>{squares[5]}</Square>
        <Square onSquareClick={() => handleClick(6)}>{squares[6]}</Square>
        <Square onSquareClick={() => handleClick(7)}>{squares[7]}</Square>
        <Square onSquareClick={() => handleClick(8)}>{squares[8]}</Square>
      </div>
    </div>
  );
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
