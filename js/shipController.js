let imageCreation = new objectCreation();
let travelSwitch = 0;
let spriteCheck = 0;
let totalResource = 0;
let EnemyBase;
spawnCheckStaticEnemy = true;

///Wave Management
let waveTimer = 300;
let waveShipCounter = 2;
let shipsX = 300;
let shipsY = 300;


function shipControllerPreload (){
    imageCreation.preload();
}

function shipControllerSetup (){
    spawnShip = new Group();
    enemyShip = new Group();
    highlighter = new Group();
    resourceShip = new Group();
    playerSpawnBullet = new Group();
    enemySpawnBullet = new Group();
    waveShips = new Group();
    playerSpawnBullet.overlaps(playerSpawnBullet);
    playerSpawnBullet.overlaps(enemySpawnBullet);
    enemySpawnBullet.overlaps(playerSpawnBullet);
    enemySpawnBullet.overlaps(enemySpawnBullet);
    spriteCheck = frameCount; 
}

function shipControllerDraw() {
    spawnBaseGame();
    fighterShipController();
    resourceShipController();
    playerShipShooting();
    enemyShipSpawn();
    enemyWaveMove();
    gameEnd();
    removeAllSprites();
    enemyShipShooting(); 
    enemyWaveSpawn();
    shotCheckEnemy();
    shotCheckPlayer();
    waveTimer--;

    enemySpawnBullet.overlaps(EnemyBase);
}

function spawnBaseGame(){
    if (imageCreation.createPlayerBaseMade === false){
        resource = imageCreation.createResourceOne(width/1.1, height/1.4);
        resource2 = imageCreation.createResourceTwo(width/2.2, height/1.1);
        PlayerBase = imageCreation.createPlayerBase(width/1.15, height/1.15);
        EnemyBase = imageCreation.createEnemyBase(width/10, height/7);
        EnemyBase.rotation = 140;
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

/// Static guard ships for the enemy base
/// so player can't rush boss right away.
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
                yUpdater -= 120;
                rotation += 30;
            }
        }
        spawnCheckStaticEnemy = false;
}


/// Below is everything to do with shooting
/// it has been split into player shots and 
/// enemy shots as their bullet arrays are 
/// different.
function playerShipShooting(){
    for(let i = 0; i < spawnShip.length; i++){
        for(let k = 0; k < enemyShip.length; k++){
        if (dist(spawnShip[i].x, spawnShip[i].y, EnemyBase.x, EnemyBase.y)  < 300 && EnemyBase.hp >= 1){ ///The dist check is different for every target. 1
            spawnShip[i].rotateTo(EnemyBase, 2, 90);
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

        } else if(dist(spawnShip[i].x, spawnShip[i].y, enemyShip[k].x, enemyShip[k].y)  < 300 && enemyShip[k].hp >= 1){ ///This helps keep the rounds shot arrays clean. 1.1
            spawnShip[i].rotateTo(enemyShip[k], 2, 90);
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

    for(let i = 0; i < spawnShip.length; i++){
        for(let k = 0; k < waveShips.length; k++){
            if (dist(spawnShip[i].x, spawnShip[i].y, waveShips[k].x, waveShips[k].y)  < 300 && waveShips[k].hp >= 1){ ///Checking for ships that spawn in waves
                spawnShip[i].rotateTo(waveShips[k], 2, 90);
                if (frameCount % 50 == 1){
                    let spawnedBullet = imageCreation.createShotRound(spawnShip[i].x, spawnShip[i].y);
                    spawnedBullet.rotation = spawnShip[i].rotation;
                    spawnedBullet.rotateTo(waveShips[k], 20, 90);
                    spawnedBullet.overlaps(waveShips[k]);
                    spawnedBullet.overlaps(spawnShip);
                    spawnedBullet.life = 80;
                    spawnedBullet.moveTo(waveShips[k].x, waveShips[k].y, 3);
                    playerSpawnBullet.push(spawnedBullet);
        }
    }
}
}
}


function enemyShipShooting(){
    for(let i = 0; i < spawnShip.length; i++){
        for(let k = 0; k < enemyShip.length; k++){
        if (dist(enemyShip[k].x, enemyShip[k].y, spawnShip[i].x, spawnShip[i].y) < 300 && spawnShip[i].hp >= 1){
            enemyShip[k].rotateTo(spawnShip[i], 2, 90);
            if (frameCount % 60 == 1){
                let spawnedBullet = imageCreation.createShotRound(enemyShip[k].x, enemyShip[k].y);
                spawnedBullet.rotateTo(spawnShip[i], 20, 90);
                spawnedBullet.overlaps(spawnShip[i]);
                spawnedBullet.overlaps(enemyShip);
                spawnedBullet.life = 80;
                spawnedBullet.moveTo(spawnShip[i].x, spawnShip[i].y, 3);
                enemySpawnBullet.push(spawnedBullet);
            }

        } else if(dist(EnemyBase.x, EnemyBase.y, spawnShip[i].x, spawnShip[i].y)  < 300 && enemyShip[k].hp >= 1){
            if (frameCount % 50 == 1){
                let spawnedBullet = imageCreation.createShotRound(EnemyBase.x, EnemyBase.y);
                spawnedBullet.rotation = enemyShip[k].rotation;
                spawnedBullet.rotateTo(spawnShip[i], 20, 90);
                spawnedBullet.overlaps(spawnShip[i]);
                spawnedBullet.overlaps(enemyShip);
                spawnedBullet.life = 80;
                spawnedBullet.moveTo(spawnShip[i].x, spawnShip[i].y, 3);
                enemySpawnBullet.push(spawnedBullet);
            }
        }
    }
    }

    for(let i = 0; i < spawnShip.length; i++){
        for(let k = 0; k < waveShips.length; k++){
            if (dist(waveShips[k].x, waveShips[k].y, spawnShip[i].x, spawnShip[i].y) < 300 && spawnShip[i].hp >= 1){
                waveShips[k].rotateTo(spawnShip[i], 2, 90);
                if (frameCount % 60 == 1){
                    let spawnedBullet = imageCreation.createShotRound(waveShips[k].x, waveShips[k].y);
                    spawnedBullet.rotation = waveShips[k].rotation;
                    spawnedBullet.rotateTo(spawnShip[i], 20, 90);
                    spawnedBullet.overlaps(spawnShip[i]);
                    spawnedBullet.overlaps(waveShips);
                    spawnedBullet.life = 80;
                    spawnedBullet.moveTo(spawnShip[i].x, spawnShip[i].y, 3);
                    enemySpawnBullet.push(spawnedBullet);
                }
        }
        
        if (dist(waveShips[k].x, waveShips[k].y, PlayerBase.x, PlayerBase.y) < 300 && PlayerBase.hp >= 1){
            waveShips[k].rotateTo(PlayerBase, 2, 90);
            if (frameCount % 60 == 1){
                let spawnedBullet = imageCreation.createShotRound(waveShips[k].x, waveShips[k].y);
                spawnedBullet.rotateTo(PlayerBase, 20, 90);
                spawnedBullet.overlaps(PlayerBase);
                spawnedBullet.overlaps(waveShips);
                spawnedBullet.life = 80;
                spawnedBullet.moveTo(PlayerBase.x, PlayerBase.y, 3);
                enemySpawnBullet.push(spawnedBullet);
            }
    }
    }
}
}

function shotCheckPlayer(){
    for(let i = 0; i < playerSpawnBullet.length; i++){
        for(let k = 0; k < enemyShip.length; k++){

            if(playerSpawnBullet[i].overlaps(EnemyBase)){
                EnemyBase.hp --;
                EnemyBase.text = EnemyBase.hp;
                playerSpawnBullet[i].remove();
                    if(EnemyBase.hp == 0){
                        EnemyBase.remove();
                    } else return;
            }
            
            if (playerSpawnBullet[i].overlaps(enemyShip[k])){
                enemyShip[k].hp --;
                enemyShip[k].text = enemyShip[k].hp;
                playerSpawnBullet[i].remove();
                    if(enemyShip[k].hp == 0){
                        enemyShip[k].remove();
                    } else return;
            }
        }

    }

    for(let i = 0; i < playerSpawnBullet.length; i++){
        for(let k = 0; k < waveShips.length; k++){
            if (playerSpawnBullet[i].overlaps(waveShips[k])){
                waveShips[k].hp --;
                waveShips[k].text = waveShips[k].hp;
                playerSpawnBullet[i].remove();
                    if(waveShips[k].hp == 0){
                        waveShips[k].remove();
                    } else return;
            }
        }
    }
}

function shotCheckEnemy(){
    for(let f = 0; f < enemySpawnBullet.length; f++){
        for(let z = 0; z < spawnShip.length; z++){
            if (enemySpawnBullet[f].overlaps(spawnShip[z])){
                spawnShip[z].hp --;
                spawnShip[z].text = spawnShip[z].hp;
                enemySpawnBullet[f].remove();
                    if(spawnShip[z].hp == 0){
                        spawnShip[z].remove();
                    } else return;
            }

            if (enemySpawnBullet[f].overlaps(PlayerBase)){
                PlayerBase.hp --;
                PlayerBase.text = PlayerBase.hp;
                enemySpawnBullet[f].remove();
                    if(PlayerBase.hp == 0){
                        PlayerBase.remove();
                    } else return;
            }
        }
    }
}

function gameEnd(){
    if(EnemyBase.hp == 0 || PlayerBase.hp == 0){
        currentGameScreen = END_GAME;
    }
}


function removeAllSprites(){
    if(EnemyBase.hp == 0 || PlayerBase.hp == 0){
        
        for(let i = allSprites.length; i--;){  //GRABS ALL SPRITES AND REMOVES THEM.
            allSprites[i].remove()
        }
    }
}

function enemyWaveSpawn(){
    if(waveTimer <= 0 && waveShipCounter > 0 && waveShipCounter < 3){
        let waveOneShips = imageCreation.createEnemyShips(shipsX, shipsY);
        waveShipCounter --;
        shipsX += 100;
        shipsY -= 300;
        waveShips.push(waveOneShips);    
    }

}

function enemyWaveMove(){
    for(let i = 0; i < waveShips.length; i++){
        for(let k = 0; k < spawnShip.length; k++){
            if (dist(waveShips[i].x, waveShips[i].y, PlayerBase.x, PlayerBase.y)  < 300 && PlayerBase.hp >= 1){
                waveShips[i].drag = 10;

            } else if (dist(waveShips[i].x, waveShips[i].y, spawnShip[k].x, spawnShip[k].y)  < 300 && spawnShip[k].hp >= 1){
                waveShips[i].drag = 10;

            } else 
                    waveShips[i].moveTo(PlayerBase.x, PlayerBase.y, 2);
                    waveShips[i].rotateTo(PlayerBase, 2, 90);
    }
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

  



