import { ICellState } from '../interfaces/ICellState';
import { INumberOfNeighbors } from '../interfaces/INumberOfNeighbors';
import { Cell } from '../src/cell';
import { IBoard } from './../interfaces/IBoard';

describe('GameOfLife', () => {
  it('should return array of dead cells, when array of dead cells is given', () => {
    //given
    const board: IBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    //when
    const gameOfLife = new GameOfLife(board).tick();

    //then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it('should return array of dead cells, when array with 1 cell is given', () => {
    //given
    const board: IBoard = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];

    //when
    const gameOfLife = new GameOfLife(board).tick();

    //then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it('cell with 2 neighbors should survived and cell with 3 neighbors should be born', () => {
    //given
    const board: IBoard = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ];

    //when
    const gameOfLife = new GameOfLife(board).tick();

    //then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  });

  it('cell with 4 neighbors should die and cell with 3 neighbors should be born', () => {
    //given
    const board: IBoard = [
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ];

    //when
    const gameOfLife = new GameOfLife(board).tick();

    //then
    expect(gameOfLife.getBoard()).toEqual([
      [1, 0, 1],
      [1, 0, 1],
      [0, 0, 0],
    ]);
  });

  it('should return proper board', () => {
    //given
    const board: IBoard = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 0],
    ];

    //when
    const gameOfLife = new GameOfLife(board).tick();

    //then
    expect(gameOfLife.getBoard()).toEqual([
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1],
    ]);
  });

  it('should render random board', () => {
    //given
    const gameOfLife = new GameOfLife().generateBoard(5);
    const gameOfLife2 = new GameOfLife().generateBoard(5);
    //when

    //then
    expect(gameOfLife.getBoard()).not.toEqual(gameOfLife2.getBoard());
  });
});

class GameOfLife {
  constructor(private board?: IBoard) {}

  public getBoard() {
    return this.board;
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
