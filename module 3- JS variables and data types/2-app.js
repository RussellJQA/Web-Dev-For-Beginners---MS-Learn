const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 25;
playerTwoPoints -= 50;
playerThreePoints += 75;

console.log(playerOnePoints);
console.log(playerTwoPoints);
console.log(playerThreePoints);