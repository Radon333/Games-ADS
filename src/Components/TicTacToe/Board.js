import React from "react";

import { human } from "./human.js";
import { computer } from "./computer.js";

function Square(data) {
  const squareClass =
    "square " +
    (data.value ? "" : "hoverable ") +
    (data.value === human ? human : computer);

  return (
    <button className={squareClass} onClick={data.onClick}>
      <span>{data.value}</span>
    </button>
  );
}

function Board(props) {
  const squares = props.squares;
  const onClick = props.onClick;
  
  function renderSquare(row, column) {
    return (
      <Square
        value={squares[row][column]}
        onClick={() => onClick(row, column)}
      />
    );
  }

  function createBoard() {
    let board = [];

    for (let row = 0; row < 3; row++) {
      let boardRow = [];

      for (let column = 0; column < 3; column++) {
        boardRow.push(renderSquare(row, column));
      }

      board.push(<div className="board-row">{boardRow}</div>);
    }

    return board;
  }

  return <div>{createBoard}</div>;
}


export default Board;
