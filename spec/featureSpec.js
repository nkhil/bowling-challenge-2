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
    expect(scoreCard.gameScore).toEqual(0);
  });

  it('can score a game with 3 strikes in a row', () => {
    for(let i = 0; i < 3; i++){  
      scoreCard.frames[i].rollOne = 10;
    }
    scoreCard.frames[0].calculateScore();
    scoreCard.frames[1].calculateScore();
    scoreCard.frames[2].calculateScore();
    expect(scoreCard.frames[0].totalScore).toEqual(30);

    scoreCard.getFrameScores();
    scoreCard.calculateTotalScore();
    expect(scoreCard.gameScore).toEqual(30);
  });

  it('can score a game with a spare', () => {
    scoreCard.frames[0].rollOne = 6;
    scoreCard.frames[0].rollTwo = 4;
    scoreCard.frames[1].rollOne = 5;
    
    scoreCard.getFrameScores();
    scoreCard.calculateTotalScore();
    expect(scoreCard.gameScore).toEqual(15);    
  });

  it('can score a game with 2 strikes and a single non-bonus roll', () => {
    scoreCard.frames[0].rollOne = 10;
    scoreCard.frames[1].rollOne = 10;
    scoreCard.frames[2].rollOne = 6;
    scoreCard.getFrameScores();
    scoreCard.calculateTotalScore();
    expect(scoreCard.gameScore).toEqual(26);  
  });

  it('can score 3 spares in a row', () => {
    scoreCard.frames[0].rollOne = 6;
    scoreCard.frames[0].rollTwo = 4;
    scoreCard.frames[1].rollOne = 5;
    scoreCard.frames[1].rollTwo = 5;
    scoreCard.frames[2].rollOne = 8;
    scoreCard.frames[2].rollTwo = 2;

    scoreCard.getFrameScores();
    scoreCard.calculateTotalScore();
    expect(scoreCard.gameScore).toEqual(33);
  });

  

});
