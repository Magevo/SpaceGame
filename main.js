const W = 1000
const H = 750

let spawnCheck = false;
let ship1;
let resource;
let resource2;


let playerShipsGroup, enemyShipsGroup, resourceGroup;

let imageCreation = new objectCreation();





function preload(){
 // img = loadImage('assets/resources/Meteor_01.png');
  imageCreation.preload();
}

function setup() {
  new Canvas(W, H);
  playerShipsGroup = new Group();
    
}

function draw() {
  background(125)

  //image(img, 10, 10);

  //console.log(imageCreation.createPlayerBaseMade);

  if (imageCreation.createPlayerBaseMade === false){
    resource = imageCreation.createResourceOne(W/1.1, H/1.4);
    resource2 = imageCreation.createResourceTwo(W/1.3, H/1.4);
    imageCreation.createPlayerBase(W/1.15, H/1.15);
    imageCreation.createEnemyBase(W/10, H/7);
    ship1 = imageCreation.createPlayerShips(width/2, height/2);
  }


 console.log(resource2.resource);
  /*if (mouse.presses()){
    playerShip1.x = mouseX;
    playerShip1.y = mouseY;
  }*/

   //Erin's attempt at movement (works in personal js file)
  if (mouse.presses()) {
    ship1.moveTo(mouse.x, mouse.y, 4);
  }

}



