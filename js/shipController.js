let imageCreation = new objectCreation();
let sendBack = false;
let spriteCheck = 0;
let totalResouce = 0;


function shipControllerPreload (){
    imageCreation.preload();
}

function shipControllerSetup (){
    spawnShip = new Group();
    highlighter = new Group();
    resourceShip = new Group();
    spriteCheck = frameCount; 
}

function shipControllerDraw() {
    spawnBaseGame();
    fighterShipController();
    resourceShipController();

}

function spawnBaseGame(){
    if (imageCreation.createPlayerBaseMade === false){
        resource = imageCreation.createResourceOne(width/1.1, height/1.4);
        resource2 = imageCreation.createResourceTwo(width/2.2, height/1.1);
        PlayerBase = imageCreation.createPlayerBase(width/1.15, height/1.15);
        EnemyBase = imageCreation.createEnemyBase(width/10, height/7);
        // ship1 = imageCreation.createPlayerShips(width/2, height/2);
      }
}

function fighterShipController(){

    if(kb.pressed("a") && spawnShip.length <= 4){
        // ship1.hp --;
        // ship1.text = ship1.hp;
        let playerShip = imageCreation.createPlayerShips();
        spawnShip.push(playerShip);
        }

}

function resourceShipController(){

    //make the resource Ship on pressing S
    if(kb.pressed("s")){
        let ship = imageCreation.createResourceShips(PlayerBase.x, PlayerBase.y);
        resourceShip.push(ship);
        spriteCheck = frameCount;
        }

    
    //move resouce Ship to and from player base collecting resource
    if(resourceShip.length > 0){

        resourceShip[0].moveTo(resource2.x, resource2.y, 5);

        if (resourceShip[0].colliding(resource2) >= 1 && (frameCount % 5 == 1)){
            resourceShip[0].resource++;
            resourceShip[0].text = resourceShip[0].resource;
            resource2.resource--;
            resource2.text = resource2.resource
            sendBack = true;
        }     

        if (sendBack == true && resourceShip[0].resource == 20 ){
            console.log("tester")
            console.log
            resourceShip[0].moveTo(PlayerBase.x, PlayerBase.y, 1.5);            
        }

        if (resourceShip[0].colliding(PlayerBase) >= 1){
            totalResouce = totalResouce + resourceShip[0].resource;
            resourceShip[0].resource = 0
        }

        if (resourceShip[0].colliding(PlayerBase) >= 1 && resourceShip[0].resource <=0){
            sendBack = false;
        }

    }


}



