function guiPreload(){
    resourceCounter = loadImage('./assets/gui/Table_02.png');
    resource_icon = loadImage('./assets/gui/resource_icon.png');
}

function guiSetup(){
    textSize(30);
    textStyle(BOLD);
    fill("white");
    textAlign(LEFT, CENTER);

    
    
    
    

}

function guiStart(){
    resourceCounterControl();
    
}

function resourceCounterControl(){
    //200 x 62
    image(resourceCounter, 950,50);
    image(resource_icon, 970,60);
    text(totalResource, 1005, 80);

}