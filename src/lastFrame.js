'use strict'

class LastFrame {
  constructor(game){
    this.rollOne = null;
    this.rollTwo = null;
    this.rollThree = null;
    this.totalScore = null;
    this.game = game;
  }

  total(){
    if(this.rollOne === null && this.rollTwo === null){
      return null;
    } else {
      return this.rollOne + this.rollTwo + this.rollThree;
    }
  }

  isStrike(roll){
    return this.roll === 10
  }

  isSpare(roll1, roll2){
    return roll1 + roll2 === 10 && rollTwo !== null;
  }

  rollOneIsStrike(){
    return this.isStrike(this.rollOne);
  }

  rollTwoIsStrike(){
    return this.isStrike(this.rollTwo);
  }

  rollThreeIsStrike(){
    return this.isStrike(this.rollThree);
  }

  framePlayed(){
    if(this.rollOneIsStrike()){
      return this.rollTwo != null && this.rollThree != null;
    } else if(this.isSpare(this.rollOne, this.rollTwo)){
      return this.rollThree != null;
    } else {
      return this.rollOne != null && this.rollTwo != null;
    }
  }

  calculateScore(){
    if(this.framePlayed()) {

      if(this.rollOneIsStrike()){
        this.handleRollOneStrike();
      } else if(this.isSpare(this.rollOne, this.rollTwo)){
        this.handleSpare();
      } else {
        this.totalScore = this.total();
      }
      
    }
    return this.totalScore;
  }

  handleRollOneStrike(){
    if(this.rollTwoIsStrike() && this.rollThreeIsStrike()){
      this.totalScore = 30;
    } 
    // else if(this.rollTwoIsStrike()){
    //   this.totalScore = 20 + this.rollThree;
    // } 
    else {
      this.totalScore = 10 + this.rollTwo + this.rollThree;
    }
  }

  handleSpare(){
    this.totalScore = 10 + this.rollThree;
  }



}

module.exports = LastFrame;