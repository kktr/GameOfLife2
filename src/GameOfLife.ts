import { IBoard } from '../interfaces/IBoard';
import { ICellState } from '../interfaces/ICellState';
import { INumberOfNeighbors } from '../interfaces/INumberOfNeighbors';
import { Cell } from '../src/cell';

export class GameOfLife {
  constructor(private board?: IBoard) {}

  public getBoard() {
    return this.board;
  }

  public printBoard() {
    console.log(this.board);
    return this;
  }

  public tick() {
    this.board = this.board.map((row, rowIndex) => {
      return row.map((cell, cellIndex) => {
        const neighbors = this.getNeighbors(this.board, rowIndex, cellIndex);
        return Cell.state(cell, neighbors as INumberOfNeighbors);
      });
    });
    return this;
  }

  private getNeighbors(board: IBoard, rowIndex: number, cellIndex: number) {
    const neighbor = (row: -1 | 0 | 1, cell: -1 | 0 | 1) => {
      return (
        (board[rowIndex + row] && board[rowIndex + row][cellIndex + cell]) || 0
      );
    };

    return (
      neighbor(1, 0) +
      neighbor(-1, 0) +
      neighbor(0, 1) +
      neighbor(0, -1) +
      neighbor(1, 1) +
      neighbor(-1, -1) +
      neighbor(1, -1) +
      neighbor(-1, 1)
    );
  }

  public generateBoard(size: number) {
    this.board = [];

    for (let i = 0; i < size; i++) {
      this.board.push([]);

      for (let j = 0; j < size; j++) {
        this.board[i].push(Math.round(Math.random()) as ICellState);
      }
    }

    return this;
  }
}
