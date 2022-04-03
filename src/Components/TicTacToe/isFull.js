//check if full or not
export function isFull(squares) {
  return (
    squares[0][0] &&
    squares[0][1] &&
    squares[0][2] &&
    squares[1][0] &&
    squares[1][1] &&
    squares[1][2] &&
    squares[2][0] &&
    squares[2][1] &&
    squares[2][2]
  );
}
