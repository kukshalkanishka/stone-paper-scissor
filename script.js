const gameElements = ["stone", "paper", "scissor"];
let gameElement;

const draw = "/stone_paper_scissor/images/draw.png";
const win = "/stone_paper_scissor/images/win.jpeg";
const lose = "/stone_paper_scissor/images/youLose.jpg";

const stoneConditions = { stone: draw, paper: win, scissor: lose };
const paperConditions = { stone: lose, paper: draw, scissor: win };
const scissorConditions = { stone: win, paper: lose, scissor: draw };

const gameConditions = {
  stone: stoneConditions,
  paper: paperConditions,
  scissor: scissorConditions
};

const getGameElement = function() {
  const randomElementPosition = Math.floor(Math.random() * 3);
  return gameElements[randomElementPosition];
};

const getElementCondition = function() {
  gameElement = getGameElement();
  return gameConditions[gameElement];
};

const checkIfWon = function(userElement) {
  const winningCondition = getElementCondition();
  return winningCondition[userElement];
};

const getResultForStone = function() {
  const computerMove = document.getElementById("computerMove");
  const result = checkIfWon("stone");
  const resultDiv = document.getElementById("result");
  resultDiv.setAttribute("style", `background: url(${result})`);
  computerMove.innerHTML = `Computer's move: ${gameElement}`;
};

const getResultForScissor = function() {
  const computerMove = document.getElementById("computerMove");
  const resultDiv = document.getElementById("result");
  const result = checkIfWon("scissor");
  resultDiv.setAttribute("style", `background: url(${result})`);
  computerMove.innerHTML = `Computer's move: ${gameElement}`;
};

const getResultForPaper = function() {
  const computerMove = document.getElementById("computerMove");
  const resultDiv = document.getElementById("result");
  const result = checkIfWon("paper");
  resultDiv.setAttribute("style", `background: url(${result})`);
  computerMove.innerHTML = `Computer's move: ${gameElement}`;
};

const startGame = function() {
  const main = document.getElementById("main");
  main.innerHTML =
    "<div class = 'flex'><div id='elements'>" +
    '<img  id="stone" class = "elements" src="/stone_paper_scissor/images/stone.png"' +
    'onclick="getResultForStone()" />' +
    '<img id="paper" class= "elements" src="/stone_paper_scissor/images/paper.png"' +
    'onclick="getResultForPaper()" />' +
    '<img id="scissor"  class= "elements" src="/stone_paper_scissor/images/scissor.png"' +
    ' onclick="getResultForScissor()" />' +
    "</div>" +
    '<div> <div id="result" class= "displayResult"></div>' +
    '<div id="computerMove" class = "displayResult"></div> ' +
    "</div></div>";
};
