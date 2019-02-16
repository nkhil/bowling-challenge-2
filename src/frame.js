'use strict'

class Frame {
  constructor(game, rollOne = null, rollTwo = null){
    this.rollOne = rollOne;
    this.rollTwo = rollTwo;
    this.totalScore = null;
    this.game = game;
  }

  calculateScore(){
    const rollOne = this.rollOne;
    const rollTwo = this.rollTwo;
    if(this.isStrike()){
      this.totalScore = 10;
    }
    this.totalScore =  rollOne + rollTwo;
    return this.totalScore;
  }

  isStrike(){
    return this.rollOne === 10
  }

  isSpare(){
    const rollOne = this.rollOne;
    const rollTwo = this.rollTwo;
    return rollOne + rollTwo === 10 ? true : false;
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
  


}

module.exports = Frame;