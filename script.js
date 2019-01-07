const gameElements = ["stone", "paper", "scissor"];
const draw = "/stone_paper_scissor/images/draw.png";
const win = "/stone_paper_scissor/images/win.jpeg";
const lose = "/stone_paper_scissor/images/lose.png";

const stoneConditions = { stone: draw, paper: win, scissor: lose };
const paperConditions = { stone: lose, paper: draw, scissor: win };
const scissorConditions = { stone: win, paper: lose, scissor: draw };

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
  const resultDiv = document.getElementById("result");
  const result = checkIfWon("stone");
  resultDiv.setAttribute("style", `background: url(${result})`);
};

const getResultForScissor = function() {
  const resultDiv = document.getElementById("result");
  const result = checkIfWon("scissor");
  resultDiv.setAttribute("style", `background: url(${result})`);
};

const getResultForPaper = function() {
  const resultDiv = document.getElementById("result");
  const result = checkIfWon("paper");
  resultDiv.setAttribute("style", `background: url(${result})`);
};
