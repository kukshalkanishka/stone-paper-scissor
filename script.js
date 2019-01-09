const game = (function() {
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

  const getResult = function(element) {
    const computerMove = document.getElementById("computerMove");
    const result = checkIfWon(element);
    const resultDiv = document.getElementById("result");
    resultDiv.setAttribute("src", result);
    computerMove.innerHTML = `Computer's move: ${gameElement}`;
  };

  const getResultForStone = function() {
    getResult("stone");
  };

  const getResultForScissor = function() {
    getResult("scissor");
  };

  const getResultForPaper = function() {
    getResult("paper");
  };

  const startGame = function() {
    const main = document.getElementById("main");
    main.innerHTML =
      "<div class = 'flex'><div id='elements'>" +
      '<img  id="stone" class = "elements" src="/stone_paper_scissor/images/stone.png"' +
      'onclick="game.getResultForStone()" />' +
      '<img id="paper" class= "elements" src="/stone_paper_scissor/images/paper.png"' +
      'onclick="game.getResultForPaper()" />' +
      '<img id="scissor"  class= "elements" src="/stone_paper_scissor/images/scissor.png"' +
      ' onclick="game.getResultForScissor()" />' +
      "</div>" +
      '<div> <img id="result" class= "displayResult"/>' +
      '<div id="computerMove" class = "displayResult"></div> ' +
      "</div></div>";
  };
  return {
    startGame,
    getResultForPaper,
    getResultForScissor,
    getResultForStone
  };
})();
