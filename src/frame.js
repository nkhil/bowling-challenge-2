'use strict'

class Frame {
  constructor(){
    this.rollOne = 0;
    this.rollTwo = 0;
    this.totalScore = 0;
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

}

module.exports = Frame;