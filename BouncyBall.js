const W = 800
const H = 400

/*class Ball {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.velocity={
      x:2,
      y:0
    }
    this.diameter = 30
  }
  preload(){
    console.log("You called preload");
  }
  setup(){
    console.log("You called setup");
  }
  draw(){
    console.log("You called draw");
    circle(this.x,this.y,this.diameter);

    if(this.x > W || this.x < 0){
      this.velocity.x=-this.velocity.x;
    }
  
    this.x+=this.velocity.x;
  }
}*/






////CLASS FOR CREATING BASES/////
class Base {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  preload(){
    
  }

  setup(){

  }

  createSquare(color){
    rect(this.x, this.y, 30, 30);
  }
}

class Resources{
  constructor(x, y, diameter, color){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color;
  }

  
  preload(){
    
  }

  setup(){

  }
  
  createResourceCircle(){
    fill(this.color);
    circle(this.x, this.y, this.diameter)
  }
}

class Ship{
  constructor(x, y, diameter, color){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color;
  }

  preload(){
    
  }

  setup(){

  }

  createShipCircle(){
    fill(this.color);
    circle(this.x, this.y, this.diameter)
  }
}


let homeBase = new Base(W/1.2, H/1.4);
let enemyBase = new Base(W/10, H/7);

let resourceA = new Resources(W/1.1, H/1.4, 10, 'green');
let resourceB = new Resources(W/1.3, H/1.4, 10, 'blue');

let playerShip1 = new Ship(W/1.1, H/1.6, 20, 'red');

//let ball2 = new Ball(W/2, H/2);

function preload(){
  //ball2.preload();
}

function setup() {
  new Canvas(W, H);
  //ball2.setup();
  
}

function draw() {
  background(125)
  homeBase.createSquare();
  enemyBase.createSquare();
  resourceA.createResourceCircle();
  resourceB.createResourceCircle();
  playerShip1.createShipCircle();

  if (mouse.presses()){
    playerShip1.x = mouseX;
    playerShip1.y = mouseY;
  }

}
