let imageCreation = new objectCreation();


function shipControllerPreload (){
    imageCreation.preload();
}

function shipControllerSetup (){
    spawnShip = new Group();
    highlighter = new Group();
}



function shipControllerDraw(){

    if (imageCreation.createPlayerBaseMade === false){
        resource = imageCreation.createResourceOne(width/1.1, height/1.4);
        resource2 = imageCreation.createResourceTwo(width/1.3, height/1.4);
        imageCreation.createPlayerBase(width/1.15, height/1.15);
        imageCreation.createEnemyBase(width/10, height/7);
        // ship1 = imageCreation.createPlayerShips(width/2, height/2);
      }

    if (imageCreation.createPlayerShipMade === false){
        ship1 = imageCreation.createPlayerShips(width/2, height/2);
    }


    if(mouse.pressed() && spawnShip.length <= 4){
        ship1.hp --;
        ship1.text = ship1.hp;
        let playerShip = imageCreation.createPlayerShips(mouse.x, mouse.y);
        spawnShip.push(playerShip);
        }

    if(ship1.hp == 0){
        remove;
    }
}