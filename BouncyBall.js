const W = 800
const H = 400

class Ball {
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
}

let ball2 = new Ball(W/2, H/2);

function preload(){
  ball2.preload();
}

function setup() {
  new Canvas(W, H);
  ball2.setup();
  
}

function draw() {
  background(125)
  ball2.draw();
}
