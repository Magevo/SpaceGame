const W = 1200
const H = 900

const START_SCREEN = 0;
const MAIN_MENU = 1;
const GAME = 2;
const SCORE = 3;
const END_GAME = 4; 

let currentGameScreen = END_GAME;

//background images 
let gameBackground;
let startscreenBackgroundimg;
let mainMenuBackgroundimg; 
let scoreBackgroundimg; 
let endGameBackgroundimg;

//font 
let myFont; 

//timer stuff
let timer = 0;

//scoreboard
let scoreData;
let data = [];

//end game text
let endGameCredit;

//ScrollSpeed
let scrollspeed = 0.5;
let x1 = 0;
let x2 = W;
let y = 0;

//background sound
let backgroundSound;

function menuPreload() {
    //preload background image 
    startscreenBackgroundimg = loadImage('./assets/backgrounds/startscreenBackground.png'); //credit to https://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0
    mainMenuBackgroundimg = loadImage('./assets/backgrounds/mainScreenBackground.png'); //credit to https://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0
    gameBackground = loadImage('./assets/backgrounds/gameBackground.png'); // credit to http://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0
    scoreBackgroundimg = loadImage('./assets/backgrounds/scoreBackground.png'); //credit to https://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0
    endGameBackgroundimg = loadImage('./assets/backgrounds/endGameBackground.png'); //credit to https://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0
    
    //preload sounds 
    backgroundSound = loadSound('assets/ObservingTheStar.ogg'); /* Credit to yd. Sourced from https://opengameart.org/content/another-space-background-track */

    //preload font 
    myFont = loadFont('assets/Audiowide-Regular.ttf');
  
    //preload score data 
    scoreData = loadStrings('data/score.txt');
    endGameCredit = loadStrings('data/endgame.txt');
  }

function menuSetup(){
  //background sound that plays in the background 
  backgroundSound.setVolume(0.05);
  backgroundSound.play();
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

function gotoEndGame(){
  currentGameScreen = END_GAME; //go to the end game screen 
}

function drawStartScreen() {
  //background image
  image(startscreenBackgroundimg, 0, 0);

  //Game name 
  let Line1 = 140
  let Line2 = Line1 + 100
  let Mid = 400
  textFont(myFont);
  textSize(60);
  textAlign(CENTER);

  //Orange Shadow
  fill("Orange");
  text("Journey Across", Mid, Line1);
  text("the Meteors", Mid, Line2);

  //Blue Text
  fill(0, 213, 255);
  text("Journey Across", Mid + 5, Line1 + 0);
  text("the Meteors", Mid + 5, Line2 + 0);

  //keyboard function to go to main menu 
  if (keyIsPressed) {
    currentGameScreen = MAIN_MENU;
  }
  fill("red");
  textSize(40);
  text("Press any key to continue", W / 2, H / 1.5);
}

function drawMainMenu() {
  //background image 
  image(mainMenuBackgroundimg, 0, 0);

  //custom button function 
  customButtons();

  //text 
  let Line1 = 140;
  let Line2 = Line1 + 100;
  let Mid = 400;

  let Line3 = 400;
  let Line4 = Line3 + 150;

  textFont(myFont);
  textSize(60);
  textAlign(CENTER);

  //Orange Shadow
  fill("Orange");
  text("Journey Across", Mid, Line1);
  text("the Meteors", Mid, Line2);

  //Black Shadow Start + Exit
  fill("red")
  text("Start", Mid, Line3 + 10);
  text("Score", Mid, Line4 + 10);

  //Blue Text
  fill(0, 213, 255);
  text("Journey Across", Mid + 5, Line1 + 0);
  text("the Meteors", Mid + 5, Line2 + 0);
  
  }
  
function drawGameScreen() {
  //background image and image moving

  image(gameBackground, x1, 0, W, H);
  image(gameBackground, x2, 0, W, H);

  x1 += scrollspeed;
  x2 += scrollspeed;

  if (x1 > W) {
    x1 = -(W) + 10;
  }
  if (x2 > W) {
    x2 = -(W) + 10;
  }
}

function drawScoreScreen() {
    //background image 
    image(scoreBackgroundimg, 0,0);
  
    // array for scores 
    let boardX = 500; 
    let boardY = 200;
    textSize(40);
    fill('red');
    for (let i = 0; i < scoreData.length; i++) {
      text(scoreData[i], boardX, boardY);
      boardY += 40;
    }
  
    //Exit text and return to main menu
    let Mid = 1100;
    let Line3 = 650;
    let Line4 = Line3 + 150;
    
    if (mouseX > 1000 && mouseX < 1200 && mouseY > 800 && mouseY < 900) {
      if (mouseIsPressed) {
        gotoMainMenu();
  
      } else {
        noStroke();
        fill('yellow');
        rect(1000, 850, 210, 4, 20);
  
        fill('black');
        textFont(myFont);
        textSize(60);
        textAlign(CENTER);
        text("Exit", 1100, 800);
      }
    } 
    textFont(myFont);
    textSize(60);
    textAlign(CENTER);
  
    fill('red')
    text("Exit", Mid,Line4 + 10);
}

function drawEndGameScreen(){
  //background image 
  image(endGameBackgroundimg, 0, 0);


  //scroll text 
  textFont(myFont);
  textSize(50);
  textAlign(CENTER);
  fill('yellow');
  for (let i = 0; i < )

}

function customButtons() {
    if (mouseX > 245 && mouseX < 545 && mouseY > 320 && mouseY < 420) {
      if (mouseIsPressed) {
       gotoGame();
  
      } else {
        noStroke();
        fill("yellow");
        rect(250, 450, 285, 4, 20);
  
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
        rect(250, 600, 285, 4, 20);
  
        fill('black');
        textFont(myFont);
        textSize(60);
        textAlign(CENTER);
        text("Score", 400, 550);
      }
    }
}