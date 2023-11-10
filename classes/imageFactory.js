// This class remains idle until an object aka sprite is requested.
// When the object is requested, done by calling any function below createObject,
//  it should create a sprite with the relevant image and resources.

// ------- STILL TRYING TO FIGURE OUT HOW TO CALL STUFF OUT OF THE FACTORY EFFICIENTLY --------- //

// let enemyShipFactor = 0.12;
// let playerShipFactor = 0.18;
// let resourceShipFactor = 0.5;
// let resourceFactor = 0.18;
// let fighterShipsFactor = 0.04;

let debugged = false;

class objectCreation {
    constructor() {
      this.images = new Array(); // Array for storing images.
      this.createPlayerBaseMade = false;
      this.createPlayerShipMade = false;
      this.createEnemyShipMade = false;
    }

    preload() {
      this.images.push({id: "resourceOne", path: "assets/resources/Meteor_01.png"})
      this.images.push({id: "resourceTwo", path: "assets/resources/Meteor_02.png"})
      this.images.push({id: "playerBase", path: "assets/base/player_base.png"})
      this.images.push({id: "enemyBase", path: "assets/base/enemy_base.png"})
      this.images.push({id: "playerShips", path: "assets/combatShips/playerShips/Ship_LVL_5.png"})
      this.images.push({id: "enemyShips", path: "assets/combatShips/enemyShips/Ship_LVL_1.png"})
      this.images.push({id: "resourceShips", path: "assets/combatShips/playerShips/Ship_LVL_1_TEST.png"})
      this.images.push({id: "shotRound", path: "assets/combatShips/shots/Rocket_Effect_01.png"})
      
      // Not sure if important, keep just in case
      /*
      for(let img of this.images){
        img.image = loadImage(img.path);
      }
      */
    }
    
    // This will loop through the array and return the requested image when run in functions below.
    getImageByID(id) {
      for(let img of this.images){
        if (img.id === id) {
          return img.path;
        }
      }
      return null;
    }
  
    createObject(x, y) {
      let obj = new Sprite(x, y);
      return obj;
    }
  
    createResourceOne(x, y) {
      // Set 'obj' as a new variable that calls the a creation of the class 'createObject'.
      // 'obj.img' is an object that calls the class 'getImageByID' to get the ID of the 
      //   the image 'resourceOne', thus grabbing the image and attaching it to 'obj'.
      // 'obj.resource' sets the objects resource count to 10 (i think - Erin). 
      let obj = this.createObject(x, y);
      obj.img = this.getImageByID("resourceOne");
      obj.resource = 10;

      // Text size and colour of the object ('obj') are set here. 
      obj.textSize = 15;
      obj.textColour = 'red';

      // The collider of 'obj' is set to 'static', because the object is a sprite, and the 
      //  default collider for a sprite is 'dynamic'. 
      // The object's collider width and collider height ('obj.w', 'obj.h'). 'obj.debug' shows
      //  the physical collider with a green box and a cross-hair in the centre. 
      obj.h = 35;
      obj.w = 35;
      obj.collider = 'static';
      obj.debug = debugged;

      // (add explanantion?)
      obj.text = obj.resource;

      // (add explanantion?)
      return obj;
    }
  
    createResourceTwo(x, y) {
      // Set 'obj' as a new variable that calls the a creation of the class 'createObject'.
      // 'obj.img' is an object that calls the class 'getImageByID' to get the ID of the 
      //   the image 'resourceTwo', thus grabbing the image and attaching it to 'obj'.
      // 'obj.resource' sets the objects resource count to 200 (i think - Erin). 
      let obj = this.createObject(x, y);
      obj.image = this.getImageByID("resourceTwo");
      obj.resource = 200;

      // Text size and colour of the object ('obj') are set here. 
      obj.textSize = 10;
      obj.textColour = 'red';

      // The collider of 'obj' is set to 'static', because the object is a sprite, and the 
      //  default collider for a sprite is 'dynamic'. 
      // The object's collider width and collider height ('obj.w', 'obj.h'). 'obj.debug' shows
      //  the physical collider with a green box and a cross-hair in the centre. 
      obj.h = 40;
      obj.w = 40;
      obj.collider = 'static';
      obj.debug = debugged;

      // (add explanantion?)
      obj.text = obj.resource;

      // (add explanantion?)
      return obj;
    }
  
    createPlayerBase(x, y) {
      // Set 'obj' as a new variable that calls the a creation of the class 'createObject'.
      // 'obj.img' is an object that calls the class 'getImageByID' to get the ID of the 
      //   the image 'playerBase', thus grabbing the image and attaching it to 'obj'.
      // 'obj.hp' sets the objects health points to 20 (i think - Erin). 
      let obj = this.createObject(x, y);
      obj.image = this.getImageByID("playerBase");
      obj.hp = 20;

      // Text size and colour of the object ('obj') are set here.
      obj.textSize = 10;
      obj.textColour = 'red';

      // The collider of 'obj' is set to 'static', because the object is a sprite, and the 
      //  default collider for a sprite is 'dynamic'. 
      // The object's collider width and collider height ('obj.w', 'obj.h'). 'obj.debug' shows
      //  the physical collider with a green box and a cross-hair in the centre. 
      obj.h = 70;
      obj.w = 140;
      obj.collider = 'static';
      obj.debug = debugged;

      // (add explanantion?)
      obj.text = obj.hp;

      // (add explanantion?)
      this.createPlayerBaseMade = true;

      // (add explanantion?)
      return obj;
    }
  
    createEnemyBase(x, y) {
      // Set 'obj' as a new variable that calls the a creation of the class 'createObject'.
      // 'obj.img' is an object that calls the class 'getImageByID' to get the ID of the 
      //   the image 'enemyBase', thus grabbing the image and attaching it to 'obj'.
      // 'obj.hp' sets the objects health points to 20 (i think - Erin). 
      let obj = this.createObject(x, y);
      obj.image = this.getImageByID("enemyBase");
      obj.hp = 20;

      // Text size and colour of the object ('obj') are set here.
      obj.textSize = 10;
      obj.textColour = 'red';
      obj.collider = 'static';

      // The collider of 'obj' is set to 'static', because the object is a sprite, and the 
      //  default collider for a sprite is 'dynamic'. 
      // The object's collider width and collider height ('obj.w', 'obj.h'). 'obj.debug' shows
      //  the physical collider with a green box and a cross-hair in the centre. 
      obj.h = 85;
      obj.w = 90;
      obj.text = obj.hp;
      obj.debug = debugged;

      // (add explanantion?)
      return obj;
    }
  
    createPlayerShips(x, y) {
      // Set 'obj' as a new variable that calls the a creation of the class 'createObject'.
      // 'obj.img' is an object that calls the class 'getImageByID' to get the ID of the 
      //   the image 'playerShips', thus grabbing the image and attaching it to 'obj'.
      // 'obj.hp' sets the objects health points to 4 (i think - Erin). 
      let obj = this.createObject(x, y);
      obj.image = this.getImageByID("playerShips");
      obj.hp = 4;

      // The object's collider width and collider height ('obj.w', 'obj.h'). 'obj.debug' shows
      //  the physical collider with a green box and a cross-hair in the centre. 
      obj.h = 45;
      obj.w = 30;
      //obj.collider = 'k';
      obj.debug = debugged;

      // Text size and colour of the object ('obj') are set here.
      obj.textSize = 10;
      obj.textColour = 'red';

      // (add explanantion?)
      obj.text = obj.hp;
      
      // (add explanantion?)
      obj.highlight = false;

      // (add explanantion?)
      obj.friction = 10;
      obj.rotationLock = true;
      //obj.offset.y = 30;

      // (add explanantion?)
      this.createPlayerShipMade = true;
      
      // (add explanantion?)
      return obj;
    }

    createResourceShips(x, y) {
      // Set 'obj' as a new variable that calls the a creation of the class 'createObject'.
      // 'obj.img' is an object that calls the class 'getImageByID' to get the ID of the 
      //   the image 'playerShips', thus grabbing the image and attaching it to 'obj'.
      // 'obj.resource' sets the objects resource counter to 0 (i think - Erin). 
      let obj = this.createObject(x, y);
      obj.image = this.getImageByID("resourceShips");
      obj.resource = 0;

      // The object's collider width and collider height ('obj.w', 'obj.h'). 'obj.debug' shows
      //  the physical collider with a green box and a cross-hair in the centre. 
      obj.h = 35;
      obj.w = 30;
      obj.collider = 'dynamic';
      obj.debug = debugged;

      // Text size and colour of the object ('obj') are set here.
      obj.textSize = 10;
      obj.textColour = 'red';
      
      // (add explanantion?)
      obj.text = obj.resource;
      
      // (add explanantion?)
      obj.highlight = false;
      obj.friction = 10;
      obj.rotationLock = true;

      // (add explanantion?)
      this.createPlayerShipMade = true;
      
      // (add explanantion?)
      return obj;
    }
  
    createEnemyShips(x, y) {
      // Set 'obj' as a new variable that calls the a creation of the class 'createObject'.
      // 'obj.img' is an object that calls the class 'getImageByID' to get the ID of the 
      //   the image 'playerShips', thus grabbing the image and attaching it to 'obj'.
      // 'obj.hp' sets the objects health points to 4 (i think - Erin). 
      let obj = this.createObject(x, y);
      obj.image = this.getImageByID("enemyShips");
      obj.hp = 4;

      // Text size and colour of the object ('obj') are set here.
      obj.textSize = 10;
      obj.textColour = 'red';

      obj.text = obj.hp;

      // 'obj.debug' showsthe physical collider with a green box and a cross-hair in the centre. 
      obj.debug = debugged;

      this.createEnemyShipMade = true;

      return obj;
    }
  
    createShotRound(x, y) {
      // Set 'obj' as a new variable that calls the a creation of the class 'createObject'.
      // 'obj.img' is an object that calls the class 'getImageByID' to get the ID of the 
      //   the image 'playerShips', thus grabbing the image and attaching it to 'obj'.
      let obj = this.createObject(x, y);
      obj.image = this.getImageByID("shotRound");

      // 'obj.debug' showsthe physical collider with a green box and a cross-hair in the centre. 
      obj.debug = debugged;
      obj.scale = 0.25;

      return obj;  
    }
  }
  
  