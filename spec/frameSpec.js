
describe('Frame', () => {
  
  const Frame = require('../src/frame')
  let frame;
  
  beforeEach(() => {
    frame = new Frame();
  });
  
  describe('calculateScore', () => {
    it('calculates a non-bonus score', () => {
      frame.rollOne = 1;
      frame.rollTwo = 1;
      frame.calculateScore()
      expect(frame.totalScore).toEqual(2);
    });

    it('calculates a frame with a strike', () => {
      frame.rollOne = 10;
      frame.calculateScore();
      expect(frame.totalScore).toEqual(10);
    });
  });

  describe('isStrike', () => {
    it('checks if it is a strike', () => {
      frame.rollOne = 10;
      expect(frame.isStrike()).toEqual(true);
    });
  });

  describe('isSpare', () => {
    it('checks if a frame is a spare', () => {
      frame.rollOne = 6;
      frame.rollTwo = 4;
      expect(frame.isSpare()).toEqual(true);
    });
  });

});