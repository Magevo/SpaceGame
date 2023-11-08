let firstSelect = [];
let highlightStarted = false;

function Highlight(){
  initiateHighlight();
  checkhighlighted();
}

function initiateHighlight(){

  if (highlightStarted===false && mouse.presses()){
    firstSelect.push(mouse.x,mouse.y);
    
    highlightStarted = true;
    highlightSprite = new Sprite()
  }

  if (highlightStarted===true){
    let x = (firstSelect[0] + (mouse.x - firstSelect[0]) / 2);
    let y = (firstSelect[1] + (mouse.y - firstSelect[1]) / 2);

    let w = abs(mouse.x - firstSelect[0])
    let h = abs(mouse.y - firstSelect[1])

    if (w===0){
      w=1
    } 

    if (h===0){
      h=1
    }
        
    highlightSprite.x = x
    highlightSprite.y = y
    highlightSprite.w = w
    highlightSprite.h = h

    highlightSprite.overlaps(allSprites);
    highlightSprite.color = "rgba(255,0,0,0.1)";

    for (let i = 0; i < spawnShip.length; i++){
      if (highlightSprite.overlaps(spawnShip[i])) spawnShip[i].highlight = true;
  }

    if(mouse.released()){

      
      highlightSprite.remove();
  
      firstSelect = [];  
      highlightStarted = false;      
    } 

  }     
}

function checkhighlighted(){ //Check if highlight is true and change image, hold d to deselect, hold m  and click to move
      
  if (spawnShip.length > 0) {
        for (let i = 0; i < spawnShip.length; i++) {
          if (spawnShip[i].highlight === true) {
            spawnShip[i].img = ('./assets/combatShips/playerShips/Ship_LVL_5_H.png')
          }
          if (spawnShip[i].highlight === true && kb.released("space")) {
            console.log("mouse released")
            spawnShip[i].highlight = false;
            spawnShip[i].img = ('./assets/combatShips/playerShips/Ship_LVL_5.png')
            spawnShip[i].friction = 10;
            spawnShip[i].drag = 1;

          }
          if (spawnShip[i].highlight === true && kb.pressing("space") && mouse.pressing()) {
            timer = 60;
            console.log("mouse pressing loop")
            spawnShip[i].moveTo(mouse.x, mouse.y, 4);
            spawnShip[i].rotateTo(mouse, 4, 90);
            spawnShip[i].friction = 5 ;
            spawnShip[i].drag = 0.7;

          } else if (spawnShip[i].highlight === false) {
            spawnShip[i].friction = 10;
            spawnShip[i].drag = 4;
          }

          if (timer == 0) {
            spawnShip[i].friction = 5;
            spawnShip[i].drag++;
          }
        }
      }
}
