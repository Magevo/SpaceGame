const W = 1000
const H = 750

let imageCreation = new objectCreation();

function preload(){
    imageCreation.preload();
}

function setup() {
    new Canvas(W, H);

    //let toBeSpawnedShip = imageCreation.createPlayerShips();
    spawnShip = new Group();
}

function draw(){
    background(125);


    if (imageCreation.createPlayerShipMade === false){
        ship1 = imageCreation.createPlayerShips(width/2, height/2);
    }

    if(mouse.pressed() && spawnShip.length <= 4){
        ship1.hp --;
        ship1.text = ship1.hp;
        let playerShip = imageCreation.createPlayerShips(mouse.x, mouse.y);
        spawnShip.push(playerShip);
        }
}