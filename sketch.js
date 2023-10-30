
//Game screens constants 
const START_SCREEN = 0;
const MAIN_MENU = 1;
const GAME = 2;
const SCORE = 3;
/*const DEMO_VIDEO = 4;*/ //

//current state 
let currentGameScreen = START_SCREEN;

//Game ready only on game screen 
let isGameReady = false; 

//Canvas size 
const width = 1200; 
const height = 800; 

function preload(){
  //preload background image 

  //preload player and enemy base

  //preload resources 

  //preload sounds 

  //preload font 

  //preload score data 
}
function setup() {
  new Canvas(width, height);
  //font 

  //start game button 

  //score button 

}

function draw() {
  background("red");

  //Changing to different screens 
  if (currentGameScreen == START_SCREEN) {
    drawStartScreen();
  } else if (currentGameScreen == MAIN_MENU) {
    drawMainMenu();
  } else if (currentGameScreen == GAME) {
    drawGameScreen();
  } else if (currentGameScreen == SCORE) {
    drawScoreScreen();
  }

}

function gotoMainMenu() {
  currentGameScreen == MAIN_MENU; //go to main menu 
}

function gotoGame() {
  currentGameScreen == GAME; // go to the game screen 
}

function gotoScore() {
  currentGameScreen == SCORE; // go to the game score 
}

function drawStartScreen() {
  //hide/show buttons

  //background image

  //Game name 

  //keyboard function to go to main menu 
  
  //background sound

  //game ready 
  /* if(isGameReady === false){
    isGameReady = true; 
  }*/
}

function drawMainMenu() {
  //hide/show buttons 

  //background image 

  //button for play 

  //button for score 

}

function drawGameScreen() {
  //hide/show buttons

  //background image 

  //HP monitor
    //player health 
    //enemy health  

  //bases 
    //player base 
    //enemy base 

  //resources 

}


function drawScoreScreen() {
  //hide/show buttons 

  //background image 

  // array for scores 
}




/*fill(0);
  textSize(24);
  textAlign(CENTER);
  text('Click to create a new sprite', width / 2, height / 2);
  text('Git Attemp 1', width / 2, height / 1.5);

    if (mouse.presses()) {

      let sprite = new Sprite(mouse.x, mouse.y, 30, 30);

      sprite.color = "yellow"
      sprite.vel.x = random(-1, 1);
      sprite.vel.y = random(-1, 1);

  }*/
