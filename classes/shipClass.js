
let playerShip1Movement;

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
      // playerShip1Movement = playerShip1.moveTo(mouse.x, mouse.y, 4);
    }
  }