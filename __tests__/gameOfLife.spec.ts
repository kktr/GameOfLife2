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
    const gameOfLife = new GameOfLife(board);

    //then
    expect(gameOfLife.tick().getBoard()).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
});

class GameOfLife {
  constructor(private board?: IBoard) {}

  public getBoard() {
    return this.board;
  }

  public tick() {
    return this;
  }
}
