let imageCreation = new objectCreation();
let travelSwitch = 0;
let spriteCheck = 0;
let totalResource = 0;
spawnCheckStaticEnemy = true;


function shipControllerPreload (){
    imageCreation.preload();
}

function shipControllerSetup (){
    spawnShip = new Group();
    enemyShip = new Group();
    highlighter = new Group();
    resourceShip = new Group();
    playerSpawnBullet = new Group();
    playerSpawnBullet.overlaps(playerSpawnBullet);
    //playerSpawnBullet.overlaps(enemySpawnBullet);
    enemySpawnBullet = new Group();
    spriteCheck = frameCount; 
}

function shipControllerDraw() {
    spawnBaseGame();
    fighterShipController();
    resourceShipController();
    playerShipShooting();
    enemyShipShooting(); 
    enemyShipSpawn();
    gameEnd();
    removeAllSprites();
    
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

function enemyShipSpawn(){
    let xUpdater = EnemyBase.x - 30;
    let yUpdater = EnemyBase.y + 130;
    let rotation = 140;
    if(currentGameScreen == GAME && spawnCheckStaticEnemy === true){
        for(let i = 0; i < 2; i++){
            let enemyShipSpawn = imageCreation.createEnemyShips(xUpdater, yUpdater);
                enemyShipSpawn.rotation = rotation;
                enemyShip.push(enemyShipSpawn);
                xUpdater += 180;
                yUpdater -= 120
                rotation += 30;
            }
        }
        spawnCheckStaticEnemy = false;
}

function playerShipShooting(){
    for(let i = 0; i < spawnShip.length; i++){
        for(let k = 0; k < enemyShip.length; k++){
        if (dist(spawnShip[i].x, spawnShip[i].y, EnemyBase.x, EnemyBase.y)  < 300 && EnemyBase.hp >= 1){
            if (frameCount % 50 == 1){
                let spawnedBullet = imageCreation.createShotRound(spawnShip[i].x, spawnShip[i].y);
                spawnedBullet.rotation = spawnShip[i].rotation;
                spawnedBullet.rotateTo(EnemyBase, 20, 90);
                spawnedBullet.overlaps(EnemyBase);
                spawnedBullet.overlaps(spawnShip);
                spawnedBullet.life = 80;
                spawnedBullet.moveTo(EnemyBase.x, EnemyBase.y, 3);
                playerSpawnBullet.push(spawnedBullet);
            }

        } 
        
        if(dist(spawnShip[i].x, spawnShip[i].y, enemyShip[k].x, enemyShip[k].y)  < 300 && enemyShip[k].hp >= 1){
            if (frameCount % 50 == 1){
                let spawnedBullet = imageCreation.createShotRound(spawnShip[i].x, spawnShip[i].y);
                spawnedBullet.rotation = spawnShip[i].rotation;
                spawnedBullet.rotateTo(enemyShip[k], 20, 90);
                spawnedBullet.overlaps(enemyShip[k]);
                spawnedBullet.overlaps(spawnShip);
                spawnedBullet.life = 80;
                spawnedBullet.moveTo(enemyShip[k].x, enemyShip[k].y, 3);
                playerSpawnBullet.push(spawnedBullet);
            }
        }
    }
    }


    for(let i = 0; i < playerSpawnBullet.length; i++){
        for(let k = 0; k < enemyShip.length; k++){
            if(playerSpawnBullet[i].overlap(EnemyBase)){
                EnemyBase.hp --;
                EnemyBase.text = EnemyBase.hp;
                playerSpawnBullet[i].remove();
                    if(EnemyBase.hp == 0){
                        EnemyBase.remove();
                    } 

            } else if (playerSpawnBullet[i].overlap(enemyShip[k])){
                enemyShip[k].hp --;
                enemyShip[k].text = enemyShip[k].hp;
                playerSpawnBullet[i].remove();
                    if(enemyShip[k].hp == 0){
                        enemyShip[k].remove();
                    }
        console.log(i);
    }
    } 
}
}


function enemyShipShooting(){

}

function gameEnd(){
    if(EnemyBase.hp == 0 || PlayerBase.hp == 0){
        currentGameScreen = END_GAME;
    }
}


function resourceShipController(){

    //maake the resource Ship on pressing S
    if(kb.pressed("s")){
        let ship = imageCreation.createResourceShips(PlayerBase.x, PlayerBase.y);
        resourceShip.push(ship);
        spriteCheck = frameCount;
        }

    
    //move resouce Ship to and from player base collecting resource
    if(resourceShip.length > 0){

        if(travelSwitch == 0){
            // console.log("Stage 1");
            resourceShip[0].moveTo(resource2.x, resource2.y, 5);
        }
        
        if(resourceShip[0].colliding(resource2) >= 1){
            // console.log("Stage 2");
            travelSwitch = 1;
        }
        
        if (travelSwitch == 1){
            resourceShip[0].moveTo(resource2.x, resource2.y, 5)
                if (frameCount % 4 == 1){
                    resourceShip[0].resource++;
                    resourceShip[0].text = resourceShip[0].resource;
                    resource2.resource--;
                    resource2.text = resource2.resource
                }

                if (resourceShip[0].resource == 20){
                    travelSwitch = 2;
                }
        }        
    
        if (travelSwitch == 2){
            // console.log("stage 3")
            resourceShip[0].moveTo(PlayerBase.x, PlayerBase.y, 5)
            if (resourceShip[0].colliding(PlayerBase) >= 1){
                travelSwitch = 3;
                // console.log("travel switch 3 active")
            }
        }

        if (travelSwitch == 3){
            // console.log("stage 4")
            resourceShip[0].moveTo(PlayerBase.x, PlayerBase.y, 5)
            if (frameCount % 5 == 1){
                resourceShip[0].resource--;
                resourceShip[0].text = resourceShip[0].resource;
                totalResource ++;
            }

            if (resourceShip[0].resource == 0){
                travelSwitch = 0
            }
        }
        
        
        
        // resourceShip[0].moveTo(resource2.x, resource2.y, 5);
        

        // if (resourceShip[0].colliding(resource2) >= 1 && (frameCount % 5 == 1)){
        //     resourceShip[0].resource++;
        //     resourceShip[0].text = resourceShip[0].resource;
        //     resource2.resource--;
        //     resource2.text = resource2.resource
        //     sendBack = 2;
        // }     

        // if (sendBack == 2 && resourceShip[0].resource == 20 ){
            
        //     console.log("sendBack")
        //     resourceShip[0].moveTo(PlayerBase.x, PlayerBase.y, 1.5);            
        // }


        // if (sendBack == 2 && resourceShip[0].colliding(PlayerBase) >= 1 && (frameCount % 3 == 1)){
            
        //     totalResouce++;
        //     resourceShip[0].resource--;
        //     resourceShip[0].text = resourceShip[0].resource;
        //     console.log("tester")
            

        // }

        // if (resourceShip[0].colliding(PlayerBase) >= 1 && resourceShip[0].resource <=0){
        //     sendBack = 1;
        //     console.log("ayo")
        // }

    }


}

function removeAllSprites(){
    if(EnemyBase.hp == 0){
        
        for(let i = allSprites.length; i--;){  //GRABS ALL SPRITES AND REMOVES THEM.
            allSprites[i].remove()
        }
    }
  }
  



