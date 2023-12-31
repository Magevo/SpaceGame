//Game screens constants 
const START_SCREEN = 0;
const MAIN_MENU = 1;
const GAME = 2;
const SCORE = 3;
/*const DEMO_VIDEO = 4;*/ //

//current state 
let currentGameScreen = MAIN_MENU;

//background images 
let gameBackground;
let startscreenBackgroundimg;
let mainMenuBackgroundimg; 
let scoreBackgroundimg; 

//font 
let myFont; 


//timer stuff
let timer = 0;

//scoreboard
let scoreData;
let data = [];

//Highlighter Array
let firstSelect = [];
// let selectionArray = [];
// let highlightSprite;

//healthbar
/*
let playerBaseHealth = 20; 
let enemyBaseHealth = 20;
let playerBaseMaxHealth = 20; 
let enemyBaseMaxHealth = 20; 
*/

//Canvas size 
const width = 1000;
const height = 750;

//ScrollSpeed
let scrollspeed = 0.5;
let x1 = 0;
let x2 = 1000;

function preload() {
  //preload background image 
  startscreenBackgroundimg = loadImage('assets/backgrounds/startscreenBackground.png'); //credit to https://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0
  mainMenuBackgroundimg = loadImage('assets/backgrounds/mainScreenBackground.png'); //credit to https://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0
  gameBackground = loadImage('assets/backgrounds/gameBackground.png'); // credit to http://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0
  scoreBackgroundimg = loadImage('assets/backgrounds/scoreBackground.png'); //credit to https://craftpix.net/product/space-shooter-game-kit/?num=1&count=1418&sq=space%20ship%20pack&pos=0

  //preload player, enemy base, resources
  imageCreation.preload();
  
  //preload sounds 

  //preload font 
  myFont = loadFont('assets/Audiowide-Regular.ttf');

  //preload score data 
  scoreData = loadStrings('data/score.txt');

}

function setup() {
  new Canvas(width, height);
  
  //ships and highlighter groups 
  spawnShip = new Group();
  highlighter = new Group();
  
}

function draw() {
  background("black");

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
  let Line1 = 140
  let Line2 = Line1 + 100
  let Mid = 400
  textFont(myFont);
  textSize(60);
  textAlign(CENTER);

  //Orange Shadow
  fill("Orange");
  text("Space", Mid, Line1);
  text("Wars", Mid, Line2);

  //Blue Text
  fill(0, 213, 255);
  text("Space", Mid + 5, Line1 + 0);
  text("Wars", Mid + 5, Line2 + 0);

  //keyboard function to go to main menu 
  if (keyIsPressed){
    currentGameScreen = MAIN_MENU;
  }

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
  text("Space", Mid, Line1);
  text("Wars", Mid, Line2);

  //Black Shadow Start + Exit
  fill("red")
  text("Start", Mid, Line3 + 10)
  text("Score", Mid,Line4 + 10)

  //Blue Text
  fill(0, 213, 255);
  text("Space", Mid + 5, Line1 + 0);
  text("Wars", Mid + 5, Line2 + 0);

} // CLOSED (drawMainMenu)

function drawGameScreen() {
  //background image and image moving
  // image(gameBackground, 0,0);
  timer--;

  image(gameBackground, x1, 0, W, H)
  image(gameBackground, x2, 0, W, H)

  x1 += scrollspeed
  x2 += scrollspeed

  if (x1 > W) {
    x1 = -(W) + 10;
  }
  if (x2 > W) {
    x2 = -(W) + 10;
  }
  
  //HP monitor
    //player health 
    //enemy health  

  //bases 
    //player base 
    //enemy base 

  //resources 

  // ------- TESTING SHIP SPAWNING / HP MANAGEMENT ---------- //
  /*
  if (imageCreation.createPlayerShipMade === false){
    ship1 = imageCreation.createPlayerShips(width/2, height/2);
  }
  */

  if(mouse.pressed() && spawnShip.length <= 4){
    let playerShip = imageCreation.createPlayerShips(mouse.x, mouse.y);
    spawnShip.push(playerShip);
    console.log(spawnShip[0].highlight)
    /*if(ship1.hp == 0){
      ship1.remove();
    }*/
  }

  // ----------------------------------------------------------- //
  if (imageCreation.createPlayerBaseMade === false){
    resource = imageCreation.createResourceOne(width/1.1, height/1.4);
    resource2 = imageCreation.createResourceTwo(width/1.3, height/1.4);
    imageCreation.createPlayerBase(width/1.15, height/1.15);
    imageCreation.createEnemyBase(width/10, height/7);
    // ship1 = imageCreation.createPlayerShips(width/2, height/2);
  }

  // Calling the class 'highlight' to run
  highlight();

  if (spawnShip.length > 0) { // OPEN (purple if)

    for (let i = 0; i < spawnShip.length; i++) { // OPEN (blue for)
      spawnShip[i].overlaps(resource);
      spawnShip[i].overlaps(resource2);

      if (spawnShip[i].highlight === true) { // OPEN
        spawnShip[i].img = ('./assets/combatShips/playerShips/Ship_LVL_5_H.png')
      } // CLOSED

      if (spawnShip[i].highlight === true && kb.released("space")) { // OPEN
        console.log("loop stage 1")
        spawnShip[i].highlight = false;
        spawnShip[i].img = ('./assets/combatShips/playerShips/Ship_LVL_5.png')
      } // CLOSED 

      if (spawnShip[i].highlight === true && kb.pressing("space") && mouse.presses()) { // OPEN
        console.log("ayo")
        spawnShip[i].moveTo(mouse.x, mouse.y, 4);
        spawnShip[i].friction = 10;
        spawnShip[i].drag = 1;
      } // CLOSED

      if (spawnShip.length > 0) { // OPEN (yellow if)

        for (let i = 0; i < spawnShip.length; i++) { // OPEN (purple for)

          if (spawnShip[i].highlight === true) { // OPEN
            spawnShip[i].img = ('./assets/combatShips/playerShips/Ship_LVL_5_H.png')
          } // CLOSED

          if (spawnShip[i].highlight === true && kb.released("space")) { // OPEN
            console.log("loop stage 1")
            spawnShip[i].highlight = false;
            spawnShip[i].img = ('./assets/combatShips/playerShips/Ship_LVL_5.png')
            spawnShip[i].friction = 10;
            spawnShip[i].drag = 1;
          } // CLOSED

          if (spawnShip[i].highlight === true && kb.pressing("space") && mouse.pressing()) { // OPEN
            timer = 60;
            console.log("ayo")
            spawnShip[i].moveTo(mouse.x, mouse.y, 4);
            spawnShip[i].rotateTo(mouse, 4, 90);
            spawnShip[i].friction = 5 ;
            spawnShip[i].drag = 0.7;
          } // CLOSED 
          
          else if (spawnShip[i].highlight === false) { // OPEN
            spawnShip[i].friction = 10;
            spawnShip[i].drag = 4;
          } // CLOSED

          if (timer == 0) { // OPEN
            spawnShip[i].friction = 5;
            spawnShip[i].drag++;
          } // CLOSED

        } // CLOSED (purple for)

      } // CLOSED (yellow if)

    } // CLOSED (blue for)

  } // CLOSED (purple if)

} // CLOSED (drawGameScreen)

function drawScoreScreen() {
  //background image 
  image(scoreBackgroundimg, 0,0);

  // array for scores 
  let boardX = 500; 
  let boardY = 200;

  // Text style of scores
  textSize(40);
  fill('red');

  for (let i = 0; i < scoreData.length; i++) {
    text(scoreData[i], boardX, boardY);
    boardY += 40;
  }

  //Exit text and return to main menu
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

  fill('red');
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
  }
  // else { }

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