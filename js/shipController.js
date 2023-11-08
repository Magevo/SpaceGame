let imageCreation = new objectCreation();
let sendBack = false;


function shipControllerPreload (){
    imageCreation.preload();
}

function shipControllerSetup (){
    spawnShip = new Group();
    highlighter = new Group();
    resourceShip = new Group();
}

function shipControllerDraw() {
    fighterShipController();
    resourceShipController();

}

function fighterShipController(){

    if (imageCreation.createPlayerBaseMade === false){
        resource = imageCreation.createResourceOne(width/1.1, height/1.4);
        resource2 = imageCreation.createResourceTwo(width/2.2, height/1.1);
        PlayerBase = imageCreation.createPlayerBase(width/1.15, height/1.15);
        EnemyBase = imageCreation.createEnemyBase(width/10, height/7);
        // ship1 = imageCreation.createPlayerShips(width/2, height/2);
      }

    // if (imageCreation.createPlayerShipMade === false){
    //     ship1 = imageCreation.createPlayerShips(width/2, height/2);
    // }


    if(kb.pressed("a") && spawnShip.length <= 4){
        // ship1.hp --;
        // ship1.text = ship1.hp;
        let playerShip = imageCreation.createPlayerShips();
        spawnShip.push(playerShip);
        }

    // if(ship1.hp == 0){
    //     remove;
    // }
}

function resourceShipController(){

    if(kb.pressed("s")){
        let ship = imageCreation.createResourceShips(PlayerBase.x, PlayerBase.y);
        resourceShip.push(ship);
        }

    

    if(resourceShip.length > 0){
        resourceShip[0].moveTo(resource2.x, resource2.y, 2);
        // console.log("resource2 =", resourceShip[0].colliding(resource2) >= 1);
        // console.log("PlayerBase =", resourceShip[0].colliding(PlayerBase) >= 1 );
        // console.log("sendback =", sendBack)
        if (resourceShip[0].colliding(resource2) >= 1){
            sendBack = true;
        }

        if (sendBack == true && resourceShip.resource == 20){
            console.log("tester")
            console.log
            resourceShip[0].moveTo(PlayerBase.x, PlayerBase.y, 1.5);
        }

        if (resourceShip[0].colliding(PlayerBase) >= 1){
            sendBack = false;
        }



    }


}



