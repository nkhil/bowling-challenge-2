describe('Feature test: The app', () => {
  const ScoreCard = require('../src/scoreCard');
  let scoreCard;

  beforeEach(() => {
    scoreCard = new ScoreCard();
  });

  it('can complete a game with 20x gutter balls', () => {
    for(let i = 0; i < 10; i++){
      scoreCard.frames[i].rollOne = 0;
      scoreCard.frames[i].rollTwo = 0;
    }
    scoreCard.getFrameScores();
    scoreCard.calculateTotalScore();
    expect(scoreCard.gameScore).toEqual(0)

  });

  

});
