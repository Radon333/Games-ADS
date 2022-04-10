import React from "react";

import { calculateWinner } from "./calculateWinner.js";
import { isFull } from "./isFull.js";
import { nextMove } from "./nextMove.js";
import { human } from "./human.js";
import { computer } from "./computer.js";
import {motion} from 'framer-motion';
import "./tictactoe.css";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import useSound from 'use-sound';
import jump from '../Audio/jump.mp3';
import start from "../Audio/start.mp3";

function Square(props) {
  const [playJump] = useSound(jump);
  const squareClass =
    "square " +
    (props.value ? "" : "hoverable ") +
    (props.value === human ? human : computer);

  return (
    <button className={squareClass} onClick={props.onClick} >
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
        <motion.div initial={{ x:-875}} animate={{x:0}} transition={{type:"spring",stiffness: 175,delay:0.5,duration:1}}>
        <div className="status">{status}</div>
        <h1 style={{ color: "wheat" }}>Human: X &nbsp; AI: 0</h1>
        </motion.div>
        <br />
        <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.5,duration:1.5}}
            >
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
        </motion.div>
      </div>
    );
  }
}
