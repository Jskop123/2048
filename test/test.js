import { expect } from 'chai'
import winGame from '../src/js/winGame'

let array = [
  [4, 2, 4, 2],
  [2, 4, 2, 4],
  [8, 2048, 4, 2],
  [2, 4, 2, 4]
]

describe('winGame', function() {
  it('should return true', function() {
    expect(winGame(array)).to.equal(true);
  });
});
