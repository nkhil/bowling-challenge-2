'use strict'

const Frame = require('./frame.js');
const LastFrame = require('./lastFrame.js');

class ScoreCard {
  
  constructor(){
    this.gameScore = null;
    this.frameScoreArray = [];
    let frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10
    this.frames = [
      frame1 = new Frame(this),
      frame2 = new Frame(this),
      frame3 = new Frame(this),
      frame4 = new Frame(this),
      frame5 = new Frame(this),
      frame6 = new Frame(this),
      frame7 = new Frame(this),
      frame8 = new Frame(this),
      frame9 = new Frame(this),
      // frame10 = new Frame(this),
      frame10 = new LastFrame(this)
    ];
  }

  getFrameScores(){
    this.frameScoreArray = this.frames.map(frame => frame.calculateScore() )
  }

  calculateTotalScore(){
    this.gameScore = this.frameScoreArray.reduce((sum, num) => {
      return sum + num
    }, 0);
  }



}

module.exports = ScoreCard;