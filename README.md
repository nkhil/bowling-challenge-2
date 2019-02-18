10 Pin bowling score card
=========================
[![todd-diemer-558889-unsplash.jpg](https://i.postimg.cc/GpvxbWKS/todd-diemer-558889-unsplash.jpg)](https://postimg.cc/GBhyQSZk)

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript) according to the rules of bowling (listed below for convenience). 

## Setup

1. Clone / Fork this repo
2. `cd bowling-challenge-2`
3. `npm install` to install dependencies

## Testing

This project uses `Jasmine`. To run the test suite, use `npm test`. 

## My approach

This project has been developed using the test-driven approach, using the **RED-GREEN-REFACTOR** framework. 

The most important task of this project was the domain modelling as it provided much needed clarity. 

As I'm using JavaScript in an object-oriented way, I decided that objects should know their own state, and also be aware of other objects around them. 

**Domain Model:**

[![bowling-domain-model.png](https://i.postimg.cc/3xPWHFQT/bowling-domain-model.png)](https://postimg.cc/LJ3mtfsC)

- **ScoreCard class**
This will 'contain' the frames, as well as know the score of each frame. Naturally, it is able to calculate the total score of a game (on-going or completed).

- **Frame class**
The frame is aware of its rolls, as well as its score. However, as the score depends on other frames around it, it is also necessary for it to know the 'state' of other frames. 

- **Final Frame class**
As the final frame in bowling has special rules, I decided to separate this out following single responsibility. This class contains the unique logic for the final frame. 

### Accessing the state of other frames

The `Frame` class is instantiated along with the `ScoreCard` it is a part of. This means that every instance of frame is aware of the instance of `ScoreCard` it belongs to. 

The `ScoreCard` class also initializes with an array of Frames. This allows me to access `rolls`, `scores` and other methods on other frames using `this.frames.indexOf(this) + 1` (which gives me the next frame for example).


## Rules of 10 pin bowling

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling
