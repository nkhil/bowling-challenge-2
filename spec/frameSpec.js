
describe('Frame', () => {
  
  const Frame = require('../src/frame')
  let frame;
  
  beforeEach(() => {
    frame = new Frame();
  });
  
  describe('calculateScore', () => {
    it('calculates a non-bonus score', () => {
      frame.calculateScore(1, 1)
      expect(frame.totalScore).toEqual(2);
    });
  });

  describe('isStrike', () => {
    it('checks if it is a strike', () => {
      frame.rollOne = 10;
      frame.rollTwo = 0;
      expect(frame.isStrike()).toEqual(true);
    });
  });

});