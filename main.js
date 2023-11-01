const W = 1000
const H = 750

let spawnCheck = false;
let createBases = new Base();

let imageCreation = new objectCreation();

let playerShip1 = new Ship(W/1.1, H/1.6, 20, 'red');




function preload(){
  img = loadImage('assets/resources/Meteor_01.png');
  imageCreation.preload()
}

function setup() {
  new Canvas(W, H);
    
}

function draw() {
  background(125)

  //image(img, 10, 10);

  //console.log(imageCreation.createPlayerBaseMade);
  if (imageCreation.createPlayerBaseMade === false){
    imageCreation.createResourceOne(W/1.1, H/1.4);
    imageCreation.createResourceTwo(W/1.3, H/1.4);
    imageCreation.createPlayerBase(W/1.15, H/1.15);
    imageCreation.createEnemyBase(W/10, H/7);
  }


  playerShip1.createShipCircle();

  if (mouse.presses()){
    playerShip1.x = mouseX;
    playerShip1.y = mouseY;
  }

  // Erin's attempt at movement (works in personal js file)
  // if (mouse.presses()) {
  //   ship.moveTo(mouse.x, mouse.y, 4);
  // }

}



