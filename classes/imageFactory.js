////This class remains idle until an object aka sprite is requested.
/////When the object is requested, done by calling any function below createObject,
/////it should create a sprite with the relevant image and resources.

/////STILL TRYING TO FIGURE OUT HOW TO CALL STUFF OUT OF THE FACTORY EFFICIENTLY//////

let enemyShipFactor = 0.12;
let playerShipFactor = 0.18;
let resourceFactor = 0.18;

class objectCreation {
    constructor(){
      this.images = new Array(); ////Array for storing images.
      this.createPlayerBaseMade = false;
    }
  
    preload(){
      this.images.push({id: "resourceOne", path: "assets/resources/Meteor_01.png"})
      this.images.push({id: "resourceTwo", path: "assets/resources/Meteor_02.png"})
      this.images.push({id: "playerBase", path: "assets/base/player_base.png"})
      this.images.push({id: "enemyBase", path: "assets/base/enemy_base.png"})
      this.images.push({id: "playerShips", path: "assets/combatShips/playerShips/Ship_LVL_1.png"})
      this.images.push({id: "enemyShips", path: "assets/combatShips/enemyShips/Ship_LVL_1.png"})
      this.images.push({id: "shotRound", path: "assets/shots/Rocket_Effect_01.png"})
  
      ////Not sure if important, keep just in case///
      /*for(let img of this.images){
          img.image = loadImage(img.path);
      }*/
    }
    
  
    ////This will loop through the array and return the requested image when run in functions below.
    getImageByID(id){
        for(let img of this.images){
          if (img.id === id) {
            return img.path;
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
      obj.img = this.getImageByID("resourceOne");
      obj.resource = 5;
      obj.scale = 0.18
      obj.textSize = 20;
      obj.text = obj.resource;
      return obj;
    }
  
    createResourceTwo(x, y){
      let obj = this.createObject(x, y);
      obj.image = this.getImageByID("resourceTwo");
      obj.resource = 5;
      obj.textSize = 20;
      obj.scale = 0.18
      obj.text = obj.resource;
      return obj;
    }
  
    createPlayerBase(x, y){
      let obj = this.createObject(x, y);
      obj.image = this.getImageByID("playerBase");
      obj.hp = 20;
      obj.textSize = 20;
      obj.scale = playerShipFactor;
      obj.text = obj.hp;
      this.createPlayerBaseMade = true;
      return obj;
    }
  
    createEnemyBase(x, y){
      let obj = this.createObject(x, y);
      obj.image = this.getImageByID("enemyBase");
      obj.hp = 20;
      obj.textSize = 20;
      obj.scale = enemyShipFactor;
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
  
  