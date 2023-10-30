"use strict";

////CONSTANTS FOR THE SCREEN SIZE/////
const playAreaX = 960;
const playAreaY = 960;

////SCREEN NUMBERS TO ALLOW MOVEMENT BETWEEN THEM/////
////Editing note, make the screen you want to see 0 if you want to view it first/////
let SCREENS = {
  CURRENT : 0,
  LANDING : 2,
  MAIN : 1,
  GAME : 0,
  SCORE : 3,
}


function preload(){
  
}


function setup() {
  new Canvas(playAreaX, playAreaY);
}

function draw() {

  if(SCREENS.CURRENT==SCREENS.GAME){
    background("red");
    fill(0);
    textSize(24);
    textAlign(CENTER);
    text('Click to create a new sprite', width / 2, height / 2);
    text('Git Attemp 1', width / 2, height / 1.5);

    if (mouse.presses()) {

      let sprite = new Sprite(mouse.x, mouse.y, 30, 30);

      sprite.color = "yellow"
      sprite.vel.x = random(-1, 1);
      sprite.vel.y = random(-1, 1);

    }
  }
}

