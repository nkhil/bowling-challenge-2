'use strict'

class Frame {
  constructor(){
    this.rollOne = null;
    this.rollTwo = null;
    this.totalScore = null;
  }

  calculateScore(rollOne, rollTwo){
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