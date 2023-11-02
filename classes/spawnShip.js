const W = 1000
const H = 750

let imageCreation = new objectCreation();

function setup() {
    new Canvas(W, H);

    spawnShip = new Group();
}

function draw(){
    background(125);

    

    
        if(mouse.pressed() && spawnShip.length <= 4){
            playerShip = imageCreation.createPlayerShips();
            // new spawnShip.Sprite(mouse.x,mouse.y);
            new spawnShip.Sprite(mouse.x,mouse.y);

            spawnShip.color = "yellow"
        }
    
}