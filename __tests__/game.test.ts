import { greeter } from '../src/game';

describe('greeter function', () => {
  it('should return Hello', () => {
    const game = greeter();
    expect(game).toBe('Hello');
  });
});
