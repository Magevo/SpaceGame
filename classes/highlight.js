const W = 1000
const H = 750

let firstSelect = [];
let selectionArray = [];

let highlighted = false;

let highlightSprite;

function setup() {
    new Canvas(W, H);
    test = new Sprite()
    test.color="black"
    test1 = new Sprite()
    test2 = new Sprite()
    test3 = new Sprite()
    test4 = new Sprite()

    highlighter = new Group();
}

function draw(){
    background(215);    

    highlight();

    if(highlighted===true){
        test.stroke="red"
        test.strokeWeight = 5
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
        selectionArray.push(mouse.x,mouse.y);
        
        let x1 = firstSelect[0]
        let y1 = firstSelect[1]
        let x2 = selectionArray[0]
        let y2 = selectionArray[1]

        if (highlightSprite!=undefined){
            highlightSprite.remove();
        }

        highlightSprite = new highlighter.Sprite((x1+(x2-x1)/2),y1+(y2-y1)/2,x2-x1,y2-y1)

        highlighter.color = "rgba(255,0,0,0.1)";
        highlighter.life = 1;
        highlighter.overlaps(allSprites);

        selectionArray = [];       
    }

    // once mouse is released it detects if the highlighter is overlapping a sprite and sets highlighter variable to true, giving it a red stroke.
    if(mouse.pressed()){
       
        highlighter.overlaps(test, tester);
        highlighter.overlaps(test1, tester);
        highlighter.overlaps(test2, tester);
        
        firstSelect = [];
        selectionArray = [];
    } 

}

function tester() {
    highlighted = true;
}

