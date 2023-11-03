
//Game screens constants 
const START_SCREEN = 0;
const MAIN_MENU = 1;
const GAME = 2;
const SCORE = 3;
/*const DEMO_VIDEO = 4;*/ //

//current state 
let currentGameScreen = SCORE;

//Game ready only on game screen 
let isGameReady = false;

//background images 
let gameBackgroundimg;
let startscreenBackgroundimg;
let mainMenuBackgroundimg; 
let scoreBackgroundimg; 

//font 
let myFont; 

//scoreboard


//Canvas size 
const width = 1000;
const height = 750;

function preload() {
  //preload background image 
  startscreenBackgroundimg = loadImage('assets/backgrounds/startscreenBackground.png'); //credit to https://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0
  mainMenuBackgroundimg = loadImage('assets/backgrounds/mainScreenBackground.png'); //credit to https://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0
  gameBackgroundimg = loadImage('assets/backgrounds/gameBackground.png'); // credit to http://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0
  scoreBackgroundimg = loadImage('assets/backgrounds/scoreBackground.png'); //credit to https://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0

  //preload player and enemy base

  //preload resources 

  //preload sounds 

  //preload font 
  myFont = loadFont('assets/Audiowide-Regular.ttf');

  //preload score data 

}

function setup() {
  new Canvas(width, height);
  //font 

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
  currentGameScreen = MAIN_MENU; //go to main menu 
}

function gotoGame() {
  currentGameScreen = GAME; // go to the game screen 
}

function gotoScore() {
  currentGameScreen = SCORE; // go to the game score 
}

function drawStartScreen() {
  //background image
  image(startscreenBackgroundimg, 0,0);
  
  //Game name 

  //keyboard function to go to main menu 

  //background sound

  
}

function drawMainMenu() {
  //background image 
  image(mainMenuBackgroundimg, 0,0);

  //custom button function 
  customButtons();
  
  //text 
  let Line1 = 140
  let Line2 = Line1 + 100
  let Mid = 400

  let Line3 = 400
  let Line4 = Line3 + 150

  textFont(myFont);
  textSize(60);
  textAlign(CENTER);

  //Orange Shadow
  fill("Orange");
  text("", Mid, Line1);
  text("", Mid, Line2);

  //Black Shadow Start + Exit
  fill("red")
  text("Start", Mid, Line3 + 10)
  text("Score", Mid,Line4 + 10)
 
  //Blue Text
  fill(0, 213, 255);
  text("", Mid + 5, Line1 + 0);
  text("", Mid + 5, Line2 + 0);

}

function drawGameScreen() {
  //background image 
  image(gameBackgroundimg, 0,0);
  
  //HP monitor
    //player health 
    //enemy health  

  //bases 
    //player base 
    //enemy base 

  //resources 

  //game ready 
  /* if(isGameReady === false){
    isGameReady = true; 
  }*/
}

function drawScoreScreen() {
  //background image 
  image(scoreBackgroundimg, 0,0);

  // array for scores 
  
  let Mid = 900;
  let Line3 = 550;
  let Line4 = Line3 + 150;
  
  if (mouseX > 850 && mouseX < 1000 && mouseY > 600 && mouseY < 700) {
    if (mouseIsPressed) {
      gotoMainMenu();

    } else {
      noStroke();
      fill('yellow');
      rect(800, 720, 285, 4, 20);

      fill('black');
      textFont(myFont);
      textSize(60);
      textAlign(CENTER);
      text("Exit", 900, 700);
    }
  } 
  textFont(myFont);
  textSize(60);
  textAlign(CENTER);

  fill('red')
  text("Exit", Mid,Line4 + 10);

 
}

function customButtons() {
  if (mouseX > 245 && mouseX < 545 && mouseY > 320 && mouseY < 420) {
    if (mouseIsPressed) {
     gotoGame();

    } else {
      noStroke();
      fill("yellow");
      rect(250, 415, 285, 4, 20);

      fill('black');
      textFont(myFont);
      textSize(60);
      textAlign(CENTER);
      text("Start", 400, 400);
    }
  } else { }

  if (mouseX > 100 && mouseX < 700 && mouseY > 470 && mouseY < 570) {
    if (mouseIsPressed) {
      gotoScore();

    } else {
      noStroke();
      fill('yellow');
      rect(250, 565, 285, 4, 20);

      fill('black');
      textFont(myFont);
      textSize(60);
      textAlign(CENTER);
      text("Score", 400, 550);
    }
  }
}