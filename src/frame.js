'use strict'

class Frame {
  constructor(game, rollOne = null, rollTwo = null){
    this.rollOne = rollOne;
    this.rollTwo = rollTwo;
    this.totalScore = null;
    this.game = game;
  }

  total(){
    if(this.rollOne === null && this.rollTwo === null){
      return null;
    } else {
      return this.rollOne + this.rollTwo;
    }
  }

  isStrike(){
    return this.rollOne === 10
  }

  isSpare(){
    const rollOne = this.rollOne;
    const rollTwo = this.rollTwo;
    return rollOne + rollTwo === 10 && rollTwo !== null;
  }

  frameNumber(){
    return this.game.frames.indexOf(this);
  }

  nextFrameNumber(){
    return this.game.frames.indexOf(this) + 1;
  }

  nextNextFrameNumber(){
    return this.game.frames.indexOf(this) + 2
  }

  nextFrame(){
    return this.game.frames[this.nextFrameNumber()]
  }

  nextNextFrame(){
    return this.game.frames[this.nextNextFrameNumber()]
  }

  nextFrameTotal(){
    return this.game.frames[this.nextFrameNumber()].total();
  }

  nextNextFrameTotal(){
    return this.game.frames[this.nextNextFrameNumber()].total();
  }

  nextFramePlayed(){
    return this.nextFrameTotal() !== null;
  }

  nextFrameRollOnePlayed(){
    return this.nextFrame().rollOne !== null;
  }

  nextNextFramePlayed(){
    return this.nextNextFrameTotal() !== null;
  }

  nextNextFrameRollOnePlayed(){
    return this.nextNextFrame().rollOne !== null;
  }

  calculateScore(){
    if(this.isStrike()){
      this.handleStrike();
    } else if(this.isSpare()){
      this.handleSpare();
    } else {
      this.totalScore = this.total();
    }
    return this.totalScore;
  }

  handleStrike(){
    if(this.nextFrame().isStrike() && this.nextNextFrame().isStrike() && this.nextNextFramePlayed()){
      this.totalScore = 30;
    } else if(this.nextFrame().isStrike() && this.nextNextFramePlayed()){
      this.totalScore = 20 + nextNextFrame().rollOne;
    } else if(this.nextFrame().isSpare() && this.nextFramePlayed()){
      this.totalScore = 20;
    } else if(this.nextFramePlayed()) {
      this.totalScore = 10 + this.nextFrame().total();
    }    
  }

  handleSpare(){
    if(this.nextFrame().isStrike()){
      this.totalScore = 20;
    } else if(this.nextFrameRollOnePlayed()) {
      this.totalScore = 10 + this.nextFrame().rollOne;
    }
  } 


}

module.exports = Frame;