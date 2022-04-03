import React from "react";

import { calculateWinner } from "./calculateWinner.js";
import { isFull } from "./isFull.js";
import { nextMove } from "./nextMove.js";
import { human } from "./human.js";
import { computer } from "./computer.js";

import "./tictactoe.css";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

function Square(props) {
  const squareClass =
    "square " +
    (props.value ? "" : "hoverable ") +
    (props.value === human ? human : computer);

  return (
    <button className={squareClass} onClick={props.onClick}>
      <span>{props.value}</span>
    </button>
  );
}

class Board extends React.Component {
  renderSquare(row, column) {
    return (
      <Square
        value={this.props.squares[row][column]}
        onClick={() => this.props.onClick(row, column)}
      />
    );
  }

  createBoard() {
    let board = [];

    for (let row = 0; row < 3; row++) {
      let boardRow = [];

      for (let column = 0; column < 3; column++) {
        boardRow.push(this.renderSquare(row, column));
      }

      board.push(<div className="board-row">{boardRow}</div>);
    }

    return board;
  }

  render() {
    return <>{this.createBoard()}</>;
  }
}
//goodbye
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      humanFirst: true,
      gameStart: true,
    };
  }

  handleClick(row, column) {
    const squares = this.state.squares.slice();

    if (squares[row][column]) {
      return;
    }

    if (calculateWinner(squares) !== "TIE" || isFull(squares)) {
      return <button onClick={() => this.clearBoard()}>REPLAY</button>;
    }

    squares[row][column] = human;

    this.setState({
      squares: squares,
      gameStart: false,
    });

    nextMove(squares);
  }

  clearBoard() {
    this.setState({
      squares: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      humanFirst: this.state.humanFirst, //player turn :)
      gameStart: true,
    });
  }

  render() {
    const squares = this.state.squares;
    let playBtn;

    let status = "Tic-Tac-Toe";

    const winner = calculateWinner(squares);

    if (this.state.gameStart && !this.state.humanFirst) {
      nextMove(squares);
      this.setState({
        squares: squares,
        gameStart: false,
      });
    }

    if (winner !== "TIE" || isFull(squares)) {
      status = "Winner: " + winner;
      playBtn = (
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={() => this.clearBoard()}
        >
          REPLAY
        </Button>
      );
    }

    return (
      <div className="game">
        <br />
        <div className="status">{status}</div>
        <h1 style={{ color: "wheat" }}>Human: X &nbsp; AI: 0</h1>
        <br />
        <div className="game-board">
          <Board
            squares={squares}
            onClick={(row, column) => this.handleClick(row, column)}
          />
        </div>
        <div style={{ paddingTop: "3vh" }}>
          {playBtn}&nbsp;
          <Link to="/">
            <Button
              size="large"
              variant="contained"
              color="warning"
              className="replay"
            >
              Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
