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

  bothRollsPlayed(){
    return this.rollOne != null && this.rollTwo != null;
  }

  framePlayed(){
    return this.isStrike() || this.isSpare() || this.bothRollsPlayed();
  }

  calculateScore(){
    if(this.framePlayed()){

      if(this.frameNumber() === 8){
        this.handleFrameNine();
      } else if(this.isStrike()){
        this.handleStrike();
      } else if(this.isSpare()){
        this.handleSpare();
      } else {
        this.totalScore = this.total();
      }

    }    
    return this.totalScore;
  }

  handleStrike(){
    if(this.nextFrame().isStrike() && this.nextNextFrame().isStrike()){
      this.totalScore = 30;
    } else if(this.nextFrame().isStrike() && this.nextNextFramePlayed()){
      this.totalScore = 20 + this.nextNextFrame().rollOne;
    } else if(this.nextFrame().isSpare()){
      this.totalScore = 20;
    } else if(this.nextFramePlayed() && this.nextNextFramePlayed()) {
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
  
  handleFrameNine(){
    if(this.isStrike()){
      this.handleFrameNineStrike();
    } else if(this.isSpare()){
      this.totalScore = 10 + this.nextFrame().rollOne;
    } else {
      this.totalScore = this.total();
    }
  }

  handleFrameNineStrike(){
    if(this.nextFrame().rollOne === 10 && this.nextFrame().rollTwo === 10){
      this.totalScore = 30;
    } else if(this.nextFrame().rollOne === 10){
      this.totalScore = 20 + this.nextFrame().rollTwo;
    } else {
      this.totalScore = 10 + this.nextFrame().rollOne + this.nextFrame().rollTwo;
    }
  }


}

module.exports = Frame;