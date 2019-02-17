
describe('Frame', () => {
  
  const Frame = require('../src/frame')
  let frame;
  let game;
  
  beforeEach(() => {
    game = jasmine.createSpyObj('game',['frames', 'frameNumber']);
    frame = new Frame(game);
  });

  describe('total', () => {
    it('calculates the correct total for a non-bonus frame', () => {
      frame.rollOne = 5;
      frame.rollTwo = 3;
      expect(frame.total()).toEqual(8);
    });
  });
  
  describe('calculateScore', () => {
    it('calculates a non-bonus score', () => {
      frame.rollOne = 1;
      frame.rollTwo = 1;
      frame.calculateScore()
      expect(frame.total()).toEqual(2);
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

  // describe('frameNumber', () => {
  //   it('returns the frame number for that instance', () => {
  //     // const frames = game.frames
  //     // (game.framenumber(frame)).and.returnValue(1);
  //     ((game.frames).indexOf(frame)).and.returnValue(1);
  //     expect(frame.frameNumber()).toEqual(1)
  //   });
  // });

});