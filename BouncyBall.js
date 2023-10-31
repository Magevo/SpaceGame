const W = 800
const H = 400


////This class remains idle until an object aka sprite is requested.
/////When the object is requested, done by calling any function below createObject,
/////it should create a sprite with the relevant image and resources.

/////STILL TRYING TO FIGURE OUT HOW TO CALL STUFF OUT OF THE FACTORY EFFICIENTLY//////
class objectCreation {
  constructor(){
    this.images = new Array(); ////Array for storing images.
  }

  preload(){
    this.images.push({id: "resourceOne", path: "data/resources/Meteor_01.png"})
    this.images.push({id: "resourceTwo", path: "data/resources/Meteor_02.png"})
    this.images.push({id: "playerBase", path: "data/base/player_base.png"})
    this.images.push({id: "enemyBase", path: "data/base/enemy_base.png"})
    this.images.push({id: "playerShips", path: "data/combatShips/playerShips/Ship_LVL_1.png"})
    this.images.push({id: "enemyShips", path: "data/combatShips/enemyShips/Ship_LVL_1.png"})
    this.images.push({id: "shotRound", path: "data/shots/Rocket_Effect_01.png"})

    for(let img of this.images){
        img.image = loadImage(image.path);
    }
  }

  ////This will loop through the array and return the requested image when run in functions below.
  getImageByID(id){
      for(let img of this.images){
        if (img.id === id) {
          return img.image;
        }
      }
      return null;
  }

  createObject(x, y){
    let obj = new Sprite(x, y);
    return obj;
  }

  createResourceOne(x, y){
    let obj = this.createObject(x, y);
    obj.image = this.getImageByID("resourceOne");
    obj.resource = 5;
    obj.textSize = 20;
    obj.text = obj.resource;
    return obj;
  }

  createResourceTwo(x, y){
    let obj = this.createObject(x, y);
    obj.image = this.getImageByID("resourceTwo");
    obj.resource = 5;
    obj.textSize = 20;
    obj.text = obj.resource;
    return obj;
  }

  createPlayerBase(x, y){
    let obj = this.createObject(x, y);
    obj.image = this.getImageByID("playerBase");
    obj.hp = 20;
    obj.textSize = 20;
    obj.text = obj.hp;
    return obj;
  }

  createEnemyBase(x, y){
    let obj = this.createObject(x, y);
    obj.image = this.getImageByID("enemyBase");
    obj.hp = 20;
    obj.textSize = 20;
    obj.text = obj.hp;
    return obj;
  }

  createPlayerShips(x, y){
    let obj = this.createObject(x, y);
    obj.image = this.getImageByID("playerShips");
    obj.hp = 4;
    obj.textSize = 10;
    obj.text = obj.hp;
    return obj;
  }

  createEnemyShips(x, y){
    let obj = this.createObject(x, y);
    obj.image = this.getImageByID("enemyShips");
    obj.hp = 4;
    obj.textSize = 10;
    obj.text = obj.hp;
    return obj;
  }

  createShotRound(x, y){
    let obj = this.createObject(x, y);
    obj.image = this.getImageByID("shotRound");
    return obj;
  }
}


////CLASS FOR CREATING BASES/////
class Base {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.baseSpriteSpawn=false;
    this.enemyBaseSprite;
    this.playerBaseSprite;
  }

  preload(){
    
  }

  setup(){

  }

  createSquare(){
    //This only needs to be run once in draw to have the bases spawn//
    if(this.baseSpriteSpawn === false){
      this.enemyBaseSprite = new Sprite(W/1.2, H/1.4, 30, 30);
      this.playerBaseSprite = new Sprite(W/10, H/7, 30, 30);
      this.baseSpriteSpawn = true;
    }
   
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


let createBases = new Base();

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
  createBases.createSquare();
  resourceA.createResourceCircle();
  resourceB.createResourceCircle();
  playerShip1.createShipCircle();

  if (mouse.presses()){
    playerShip1.x = mouseX;
    playerShip1.y = mouseY;
  }

}





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



