import React from "react";
import { useState } from "react";
import { calculateWinner } from "./calculateWinner.js";
import { isFull } from "./isFull.js";
import { nextMove } from "./nextMove.js";
import { human } from "./human.js";
import { motion } from "framer-motion";
import "./tictactoe.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Board from "./Board.js";
function Game() {
    const [squares, setSquares] = useState([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    const [humanFirst, setHumanFirst] = useState(true);
    const [gameStart, setGameStart] = useState(true);
  
    function clearBoard() {
      setSquares([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
      setHumanFirst(humanFirst);
      setGameStart(true);
    }
  
  
    function handleClick(row, column) {
      setSquares(squares.slice())
  
      if (squares[row][column]) {
        return;
      }
  
      if (calculateWinner(squares) !== "TIE" || isFull(squares)) {
        return <button onClick={() => clearBoard}>REPLAY</button>;
      }
  
      squares[row][column] = human;
  
      setSquares(squares);
      setGameStart(false);
      nextMove(squares);
    }
  
    let playBtn;
  
    let status = "Tic-Tac-Toe";
  
    const winner = calculateWinner(squares);
  
    if (gameStart && humanFirst) {
      nextMove(squares);
      setSquares(squares);
      setGameStart(false);
    }
  
    if (winner !== "TIE" || isFull(squares)) {
      status = "Winner: " + winner;
      playBtn = (
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={() => clearBoard}
        >
          REPLAY
        </Button>
      );
    }
  
    return (
      <div className="game">
        <br />
        <motion.div initial={{ x: -875 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 175, delay: 0.5, duration: 1 }}>
          <div className="status">{status}</div>
          <h1 style={{ color: "wheat" }}>Human: X &nbsp; AI: 0</h1>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <div className="game-board">
            <Board // HELp
              squares={squares}
              onClick={(row, column) => handleClick(row, column)}
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
  
  export default Game;
  