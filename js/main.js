

function preload(){
 menuPreload();
 shipControllerPreload();
}

function setup() {
  new Canvas(W, H);
  shipControllerSetup();
}

function draw() {
  background(125);

  if (currentGameScreen == START_SCREEN) {
    drawStartScreen();
  } else if (currentGameScreen == MAIN_MENU) {
    drawMainMenu();
  } else if (currentGameScreen == GAME) {
    drawGameScreen();
    shipControllerDraw();
    highlight();
    checkhighlighted();
  } else if (currentGameScreen == SCORE) {
    drawScoreScreen();
  }

}



