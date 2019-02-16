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

}

module.exports = Frame;