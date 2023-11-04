const W = 1000
const H = 750

// let firstSelect = [];
// let selectionArray = [];

let highlighted = false;

let highlightSprite;

let imageCreation = new objectCreation();

function preload(){
    imageCreation.preload();
    highlighter = new Group();
    
}

function setup() {
    new Canvas(W, H);
    angleMode(DEGREES);
    spawnShip = new Group();

}

function draw(){
    background(215);    
    highlight();

    checkhighlighted();

    if(kb.pressed("a") && spawnShip.length <= 4){
        let playerShip = imageCreation.createPlayerShips(200, 200);
        spawnShip.push(playerShip);
    }
}

function highlight(){

    

    // Grabs mouse X and Y upon press and stores it in array
    if (kb.pressing("space")){
        if (mouse.presses()){
            let x = mouse.x;
            let y = mouse.y;

            firstSelect.push(x,y);
        } 

        // Constantly updates and draws a sprite to follow the x and y of the mouse whilst active (Deletes the pushed value at the end of each loop)
        if(mouse.pressing()){
            
            
            let x1 = firstSelect[0]
            let y1 = firstSelect[1]
            let x2 = mouse.x
            let y2 = mouse.y

            if (highlightSprite!=undefined){
                highlightSprite.remove();
            }

            highlightSprite = new highlighter.Sprite((x1+(x2-x1)/2),y1+(y2-y1)/2,x2-x1,y2-y1)

            highlighter.color = "rgba(255,0,0,0.1)";
            highlighter.life = 1;
            highlighter.overlaps(allSprites);
        }

        if(mouse.released()){

            for (let i = 0; i < spawnShip.length; i++){
                if (highlighter.overlaps(spawnShip[i])) spawnShip[i].highlight = true;
            }
    
            firstSelect = [];        
        } 
    }
}

function checkhighlighted(){ //Check if highlight is true and change image, hold d to deselect, hold m  and click to move
    if (spawnShip.length > 0){
        for (let i = 0; i < spawnShip.length; i++){
            if (spawnShip[i].highlight===true){
            spawnShip[i].img = ('./assets/combatShips/playerShips/Ship_LVL_5_H.png')
            } 
            if (spawnShip[i].highlight===true && kb.released("space")){
                console.log("loop stage 1")
                spawnShip[i].highlight = false;
                spawnShip[i].img = ('./assets/combatShips/playerShips/Ship_LVL_5.png')    
            } 
            if (spawnShip[i].highlight===true && kb.pressing("space") && mouse.presses()){
                    console.log("ayo")
                    spawnShip[i].moveTo(mouse.x, mouse.y, 4);
                    spawnShip[i].friction = 10;
                    spawnShip[i].drag = 0;
    
            }
        }
    }
}
