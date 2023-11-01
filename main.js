const W = 800
const H = 400

let createBases = new Base();

let resourceA = new Resources(W/1.1, H/1.4, 10, 'green');
let resourceB = new Resources(W/1.3, H/1.4, 10, 'blue');

let playerShip1 = new Ship(W/1.1, H/1.6, 20, 'red');




function preload(){
  
}

function setup() {
  new Canvas(W, H);
    
}

function draw() {
  background(125)
  createBases.createSquare();
  resourceA.createResourceCircle();
  resourceB.createResourceCircle();
  playerShip1.createShipCircle();

  if (mouse.presses()){
    playerShip1.x = mouseX;
    playerShip1.y = mouseY;
  }

}



