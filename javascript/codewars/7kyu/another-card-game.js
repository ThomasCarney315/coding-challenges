// Twelve cards with grades from 0 to 11 randomly divided among 3 players: Frank, Sam, and Tom, 4 cards each. The game consists of 4 rounds. The goal of the round is to move by the card with the most points.
// In round 1, the first player who has a card with 0 points, takes the first turn, and he starts with that card. Then the second player (queue - Frank -> Sam -> Tom -> Frank, etc.) can move with any of his cards (each card is used only once per game, and there are no rules that require players to make only the best moves). The third player makes his move after the second player, and he sees the previous moves.
// The winner of the previous round then makes the first move in the next round with any remaining card.
// The player who wins 2 rounds first, wins the game.

// Task
// Return true if Frank has a chance of winning the game.
// Return false if Frank has no chance.

// Input
// 3 arrays of 4 unique numbers in each (numbers in array are sorted in ascending order). Input is always valid, no need to check.

// Example
// Round 1: Frank 2 5 8 11, Sam 1 4 7 10, Tom 0 3 6 9. Tom has to start from 0. Frank is risking nothing and goes 2. Sam gets lucky and wins round by throwing 4.

// Round 2: Frank 5 8 11, Sam 1 7 10, Tom 3 6 9. Sam starts from 1. Tom goes 3, Frank wins with 5.

// Round 3: Frank 8 11, Sam 7 10, Tom 6 9. Frank starts from 11 and wins the round either way.

// Frank is the first to win 2 rounds and therefore wins the game, the answer is true.

// One more example
// Frank 0 1 2 3, Sam 6 7 8 11, Tom 4 5 9 10.
// With these cards Frank has no chance, the answer is false.

// Tip
// Players can actually play DUMB moves, especially Sam and Tom.

// ALGORITHMSGAMES

function solution(frank, sam, tom){
    let samBeatPoss = 0
    let tomBeatPoss = 0
    frank.forEach(x=>{
      if(sam.some(y => y < x)){
        sam.splice(sam.indexOf(Math.max(...sam.filter(y => y < x))), 1)
        samBeatPoss++
      }
      if(tom.some(z => z < x)){
        tom.splice(tom.indexOf(Math.max(...tom.filter(z => z < x))),1)
        tomBeatPoss++
      }
    })
    return samBeatPoss >= 2 && tomBeatPoss >= 2 ? true : false
  }
  