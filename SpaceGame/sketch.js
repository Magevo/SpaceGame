function setup() {
  new Canvas(800, 400);
}

function draw() {
  background("aqua");

  fill(0);
  textSize(24);
  textAlign(CENTER);
  text('Click to create a new sprite', width / 2, height / 2);
  text('Git Attemp 1', width / 2, height / 1.5);

  if (mouse.presses()) {

    let sprite = new Sprite(mouse.x, mouse.y, 30, 30);

    sprite.color = "red"
    sprite.vel.x = random(-1, 1);
    sprite.vel.y = random(-1, 1);

  }

}

