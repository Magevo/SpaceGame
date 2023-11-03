const W = 1000
const H = 750

let firstSelect = [];
let selectionArray = [];

let highlighted = false;

let highlightSprite;

let imageCreation = new objectCreation();

function preload(){
    imageCreation.preload();
    resourceShip = new Group();
    highlighter = new Group();

}

function setup() {
    new Canvas(W, H);
    angleMode(DEGREES);
   

}

function draw(){
    background(215);    
    highlight();

    if (resourceShip.length > 0){
        for (let i = 0; i < resourceShip.length; i++){
            if(resourceShip[i].highlight===true){
            resourceShip[i].img = ('./assets/combatShips/playerShips/Ship_LVL_5_H.png')
            } 
        }
    }

    if (resourceShip.length > 0){
        for (let i = 0; i < resourceShip.length; i++){
            
            if (resourceShip[i].highlight===true && kb.presses("h")){
                console.log("loop stage 1")
                resourceShip[i].highlight = false;
                resourceShip[i].img = ('./assets/combatShips/playerShips/Ship_LVL_5.png')    
            }
        }
    }

    if (resourceShip.length > 0){
        for (let i = 0; i < resourceShip.length; i++){
            if (resourceShip[i].highlight===true){
                if (kb.pressing("m") && mouse.presses() ) {
                    resourceShip[i].moveTo(mouse.x, mouse.y, 4);
                    resourceShip[i].friction = 10;
                    resourceShip[i].drag = 0;
                }
            }
        }
    }


    

    // if (imageCreation.createPlayerShipMade === false){
    //     ship1 = imageCreation.createPlayerShips(width/1.2, height/1.1);
    // }

    if(kb.pressed("a") && resourceShip.length <= 4){
        // ship1.hp --;
        // ship1.text = ship1.hp;
        let playerShip = imageCreation.createPlayerShips(200, 200);
        resourceShip.push(playerShip);
        }
}

function highlight(){

    // Grabs mouse X and Y upon press and stores it in array
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
       
        

        if(resourceShip.length > 0){
        highlighter.overlaps(resourceShip[0], resourceShip0);
        }

        if(resourceShip.length > 1){
            highlighter.overlaps(resourceShip[1], resourceShip1);
        }

        if(resourceShip.length > 2){
        
            highlighter.overlaps(resourceShip[2], resourceShip2);
            
        }
    
        if(resourceShip.length > 3){
        
            highlighter.overlaps(resourceShip[3], resourceShip3);
            
        }
    
        if(resourceShip.length > 4){
        
            highlighter.overlaps(resourceShip[4], resourceShip4);
            
        }

        // console.log(highlighter.overlaps(resourceShip))
        
        
        firstSelect = [];
        print(mouse.x, mouse.y)
        
    } 

    // once mouse is released it detects if the highlighter is overlapping a sprite and sets highlighter variable to true, giving it a red stroke.
    // if(mouse.released()){
       
    //     highlighter.overlaps(resourceShip, tester);
        
    //     firstSelect = [];
    //     print(mouse.x, mouse.y)
    //     selectionArray = [];
    // } 

}


function resourceShip0() {
    resourceShip[0].highlight = true
    // console.log("resourceShip[0].highlight = true");
}

function resourceShip1() {
    resourceShip[1].highlight = true
    // console.log("resourceShip[1].highlight = true");
}

function resourceShip2() {
    resourceShip[2].highlight = true
    // console.log("resourceShip[2].highlight = true");
}

function resourceShip3() {
    resourceShip[3].highlight = true
    // console.log("resourceShip[3].highlight = true");
}

function resourceShip4() {
    resourceShip[4].highlight = true
    // console.log("resourceShip[4].highlight = true");
}

