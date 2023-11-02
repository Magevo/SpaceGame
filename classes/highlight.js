const W = 1000
const H = 800

let firstSelect = [];
let selectionArray = [];

let highlighted = false;

function setup() {
    new Canvas(W, H);
    test = new Sprite()
    test.color="black"
    test1 = new Sprite()
    test2 = new Sprite()
    test3 = new Sprite()
    test4 = new Sprite()
    
}

function draw(){
    background(215);    

    highlight();

    if(highlighted===true){
        test.stroke="red"
        test.strokeWeight = 5

        test1.stroke="red"
        test1.strokeWeight = 5

        test2.stroke="red"
        test2.strokeWeight = 5

        test3.stroke="red"
        test3.strokeWeight = 5

        test4.stroke="red"
        test4.strokeWeight = 5      
    }
    

    


}

function highlight(){

    if (mouse.presses()){
        
        let x = mouse.x;
        let y = mouse.y;
        firstSelect.push(x,y);
        
        boxy = new Group();
        boxy.color = ("red");
        boxy.life = 0.01;
        boxy.colliders = "none";
        boxy.overlaps(allSprites);
    } 

    if(mouse.pressing()){
        selectionArray.push(mouse.x,mouse.y);
        
        let x1 = firstSelect[0]
        let y1 = firstSelect[1]
        let x2 = selectionArray[0]
        let y2 = selectionArray[1]

        new boxy.Sprite((x1+(x2-x1)/2),y1+(y2-y1)/2,x2-x1,y2-y1)
        selectionArray = [];       
    }

    if(mouse.released()){

        boxy.overlaps(test, tester())
   
        firstSelect = [];
        selectionArray = [];
    } 

}

function tester() {
    highlighted = true;
}

