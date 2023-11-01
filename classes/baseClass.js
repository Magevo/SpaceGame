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