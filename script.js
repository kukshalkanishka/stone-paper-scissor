const gameElements = ["stone", "paper", "scissor"];
const stoneConditions = { stone: "Draw", paper: "Win", scissor: "Lose" };
const paperConditions = { stone: "Lose", paper: "Draw", scissor: "Win" };
const scissorConditions = { stone: "Win", paper: "Lose", scissor: "Draw" };
const gameConditions = {
  stone: stoneConditions,
  paper: paperConditions,
  scissor: scissorConditions
};

const getGameElement = function() {
  const randomValue = Math.floor(Math.random() * 3);
  return gameElements[randomValue];
};

const getElementCondition = function() {
  const gameElement = getGameElement();
  return gameConditions[gameElement];
};

const checkIfWon = function(userElement) {
  const winningCondition = getElementCondition();
  return winningCondition[userElement];
};

const getResultForStone = function() {
  alert(checkIfWon("stone"));
};

const getResultForScissor = function() {
  alert(checkIfWon("scissor"));
};

const getResultForPaper = function() {
  alert(checkIfWon("paper"));
};
