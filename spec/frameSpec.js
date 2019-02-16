
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

});