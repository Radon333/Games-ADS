//all possible winning combos
export function calculateWinner(squares) {
  let winner = "TIE";
  //vertical
  for (let column = 0; column < 3; column++) {
    if (
      squares[0][column] === squares[1][column] &&
      squares[1][column] === squares[2][column] &&
      squares[0][column]
    ) {
      winner = squares[0][column];
    }
  }

  //horizontal
  for (let row = 0; row < 3; row++) {
    if (
      squares[row][0] === squares[row][1] &&
      squares[row][1] === squares[row][2] &&
      squares[row][0]
    ) {
      winner = squares[row][0];
    }
  }

  // left up right down diagonal
  if (
    squares[0][0] &&
    squares[0][0] === squares[1][1] &&
    squares[1][1] === squares[2][2]
  ) {
    winner = squares[0][0];
  }

  // right up left down diagonal
  if (
    squares[0][2] &&
    squares[0][2] === squares[1][1] &&
    squares[1][1] === squares[2][0]
  ) {
    winner = squares[0][2];
  }

  return winner;
}
