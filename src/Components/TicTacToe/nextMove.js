import { calculateWinner } from "./calculateWinner";
import { isFull } from "./isFull";
import { evaluate } from "./evaluate.js";
import { human } from "./human.js";
import { computer } from "./computer.js";

//Best move check
export function nextMove(board) {
  if (isFull(board)) {
    return;
  }

  let bestMoveEval = -Infinity;
  let bestMoveRow;
  let bestMoveColumn;
  let score;

  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      if (!board[row][column]) {
        board[row][column] = computer;

        score = minimax(board, 0, true, -Infinity, Infinity);
        board[row][column] = "";

        if (score > bestMoveEval) {
          bestMoveEval = score;
          bestMoveRow = row;
          bestMoveColumn = column;
        } else if (score === bestMoveEval) {
          let n = Math.random();
          bestMoveRow = n < 0.35 ? row : bestMoveRow;
          bestMoveColumn = n < 0.35 ? column : bestMoveColumn;
        }
      }
    }
  }

  board[bestMoveRow][bestMoveColumn] = computer;
}

//main lol evals moves.
function minimax(board, depth, isMinimizing, alpha, beta) {
  if (calculateWinner(board) !== "TIE" || isFull(board)) {
    let evaluation = evaluate(board);
    evaluation += evaluation > 0 ? -depth : depth;

    return evaluation;
  }

  let bestEval;
  bestEval = isMinimizing ? Infinity : -Infinity;

  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      if (!board[row][column]) {
        board[row][column] = isMinimizing ? human : computer;
        let score = minimax(board, depth + 1, !isMinimizing, alpha, beta);
        board[row][column] = "";

        bestEval = isMinimizing
          ? Math.min(bestEval, score)
          : Math.max(bestEval, score);

        if (isMinimizing) {
          beta = Math.min(bestEval, beta);
        } else {
          alpha = Math.max(bestEval, alpha);
        }

        if (alpha >= beta) {
          break;
        }
      }
    }
  }

  return bestEval;
}
