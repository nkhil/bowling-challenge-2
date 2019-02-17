describe('ScoreCard', () => {
  const ScoreCard = require('../src/scoreCard')
  let scoreCard;
  let frame;

  beforeEach(() => {
    scoreCard = new ScoreCard();
    frame = jasmine.createSpyObj('frame',['calculateScore']);

  });

  describe('getFrameScores()', () => {
    it('can get the scores from individual frames', () => {
      (frame.calculateScore).and.returnValue(1);
      scoreCard.frames = [frame, frame, frame, frame, frame];
      scoreCard.getFrameScores();
      scoreCard.calculateTotalScore();
      expect(scoreCard.gameScore).toEqual(5);  
    });
  });

  describe('calculateTotalScore', () => {
    it('can calculate the total score of a game correctly', () =>{
      scoreCard.frameScoreArray = [1, 2, 3, 4, 5];
      scoreCard.calculateTotalScore();
      expect(scoreCard.gameScore).toEqual(15);
    })
  });

  describe('calculateCumulativeScores', () => {
    it('can calculate the score at the end of each frame', () => {
      scoreCard.frameScoreArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      scoreCard.calculateCumulativeScores();
      expect(scoreCard.cumulativeScores).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    });
  })

  

});