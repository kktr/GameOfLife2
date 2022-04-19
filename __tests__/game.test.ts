type ICellState = 1 | 0;
type INumberOfNeighbors = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type IBoard = ICellState[][];

class Cell {
  static state(alive: ICellState, neighbors: INumberOfNeighbors) {
    if (neighbors === 3) return 1;
    if (alive && neighbors === 2) return 1;
    return 0;
  }
}
describe('Cell', () => {
  it('alive cell should die if have 0 neighbors', () => {
    expect(Cell.state(1, 0)).toBe(0);
  });
  it('alive cell should die if have 1 neighbor', () => {
    expect(Cell.state(1, 1)).toBe(0);
  });
  it('alive cell should live if have 2 neighbors', () => {
    expect(Cell.state(1, 2)).toBe(1);
  });
  it('alive cell should live if have 3 neighbors', () => {
    expect(Cell.state(1, 3)).toBe(1);
  });
  it('alive cell should die if have more than 3 neighbors', () => {
    expect(Cell.state(1, 4)).toBe(0);
  });
  it('dead cell should born if have 3 neighbors', () => {
    expect(Cell.state(0, 3)).toBe(1);
  });
  it("dead cell should't born if have 2 neighbors", () => {
    expect(Cell.state(0, 2)).toBe(0);
  });
});
