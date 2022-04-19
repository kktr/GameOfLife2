import { IBoard } from '../interfaces/IBoard';

// ! It's firs version of implementation getNeighbors

export function getNeighborsV1(
  board: IBoard,
  rowIndex: number,
  cellIndex: number,
) {
  let neighbors = 0;
  board[rowIndex + 1] && board[rowIndex + 1][cellIndex] === 1
    ? neighbors++
    : neighbors;
  board[rowIndex - 1] && board[rowIndex - 1][cellIndex] === 1
    ? neighbors++
    : neighbors;
  board[rowIndex][cellIndex + 1] && board[rowIndex][cellIndex + 1] === 1
    ? neighbors++
    : neighbors;
  board[rowIndex][cellIndex - 1] === 1 ? neighbors++ : neighbors;
  board[rowIndex + 1] && board[rowIndex + 1][cellIndex + 1] === 1
    ? neighbors++
    : neighbors;
  board[rowIndex - 1] && board[rowIndex - 1][cellIndex - 1] === 1
    ? neighbors++
    : neighbors;
  board[rowIndex + 1] && board[rowIndex + 1][cellIndex - 1] === 1
    ? neighbors++
    : neighbors;
  board[rowIndex - 1] &&
  board[rowIndex - 1][cellIndex + 1] &&
  board[rowIndex - 1][cellIndex + 1] === 1
    ? neighbors++
    : neighbors;

  return neighbors;
}
