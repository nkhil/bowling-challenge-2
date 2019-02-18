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

  it('can score an entire game with strikes and spares', () => {
    scoreCard.frames[0].rollOne = 10;
    scoreCard.frames[1].rollOne = 3;
    scoreCard.frames[1].rollTwo = 4;
    scoreCard.frames[2].rollOne = 7;
    scoreCard.frames[2].rollTwo = 3;
    scoreCard.frames[3].rollOne = 9;
    scoreCard.frames[3].rollTwo = 0;
    scoreCard.frames[4].rollOne = 4;
    scoreCard.frames[4].rollTwo = 3;
    scoreCard.frames[5].rollOne = 10;
    scoreCard.frames[6].rollOne = 5;
    scoreCard.frames[6].rollTwo = 4;
    scoreCard.frames[7].rollOne = 2;
    scoreCard.frames[7].rollTwo = 1;
    scoreCard.frames[8].rollOne = 6;
    scoreCard.frames[8].rollTwo = 3;
    scoreCard.frames[9].rollOne = 2;
    scoreCard.frames[9].rollTwo = 2;

    scoreCard.getFrameScores();
    
    scoreCard.calculateTotalScore();
    expect(scoreCard.gameScore).toEqual(103);
  });

  it('can score a game with 3 rolls in the last frame', () => {
    scoreCard.frames[0].rollOne = 2;
    scoreCard.frames[0].rollTwo = 6;
    scoreCard.frames[1].rollOne = 10;
    scoreCard.frames[1].rollTwo = 0;
    scoreCard.frames[2].rollOne = 7;
    scoreCard.frames[2].rollTwo = 3;
    scoreCard.frames[3].rollOne = 6;
    scoreCard.frames[3].rollTwo = 4;
    scoreCard.frames[4].rollOne = 4;
    scoreCard.frames[4].rollTwo = 3;
    scoreCard.frames[5].rollOne = 10;
    scoreCard.frames[6].rollOne = 5;
    scoreCard.frames[6].rollTwo = 5;
    scoreCard.frames[7].rollOne = 2;
    scoreCard.frames[7].rollTwo = 1;
    scoreCard.frames[8].rollOne = 6;
    scoreCard.frames[8].rollTwo = 3;
    scoreCard.frames[9].rollOne = 10;
    scoreCard.frames[9].rollTwo = 2;
    scoreCard.frames[9].rollThree = 5;

    scoreCard.getFrameScores();
    
    scoreCard.calculateTotalScore();    
    expect(scoreCard.gameScore).toEqual(126);
  });

  it('can score a game with a strike in frame 9', () => {
    scoreCard.frames[0].rollOne = 1;
    scoreCard.frames[0].rollTwo = 1;
    scoreCard.frames[1].rollOne = 1;
    scoreCard.frames[1].rollTwo = 1;
    scoreCard.frames[2].rollOne = 1;
    scoreCard.frames[2].rollTwo = 1;
    scoreCard.frames[3].rollOne = 1;
    scoreCard.frames[3].rollTwo = 1;
    scoreCard.frames[4].rollOne = 1;
    scoreCard.frames[4].rollTwo = 1;
    scoreCard.frames[5].rollOne = 1;
    scoreCard.frames[5].rollTwo = 1;
    scoreCard.frames[6].rollOne = 1;
    scoreCard.frames[6].rollTwo = 1;
    scoreCard.frames[7].rollOne = 1;
    scoreCard.frames[7].rollTwo = 1;
    scoreCard.frames[8].rollOne = 10;
    scoreCard.frames[8].rollTwo = 0;
    scoreCard.frames[9].rollOne = 10;
    scoreCard.frames[9].rollTwo = 10;
    scoreCard.frames[9].rollThree = 10;

    scoreCard.getFrameScores();
    
    scoreCard.calculateTotalScore();    
    expect(scoreCard.gameScore).toEqual(76);
  });
  
  

});
