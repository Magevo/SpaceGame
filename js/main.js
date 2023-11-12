function preload(){
 menuPreload();
 shipControllerPreload();
 guiPreload();
}

function setup() {
  new Canvas(W, H);
  shipControllerSetup();
  menuSetup();
  extraEnemyShip = imageCreation.createEnemyShips(-2000, -2000);
  enemyShip.push(extraEnemyShip);
  // guiSetup();
}

function draw() {
  background(125);

  if (currentGameScreen == START_SCREEN) {
    drawStartScreen();
  }

  else if (currentGameScreen == MAIN_MENU) {
    drawMainMenu();
  }

  else if (currentGameScreen == GAME) {
    drawGameScreen();
    shipControllerDraw();
    Highlight();
    guiStart();

  }

  else if (currentGameScreen == SCORE) {
    drawScoreScreen();
  }

  else if (currentGameScreen == END_GAME) {
    drawEndGameScreen();
  }

}



