function guiPreload(){
    resourceCounter = loadImage('./assets/gui/Table_02.png');
    resource_icon = loadImage('./assets/gui/resource_icon.png');
    buy_button = loadImage('./assets/gui/Ok_BTN.png');
    but_button_active = loadImage('./assets/gui/Ok_BTN_A.png');
    

    backgroundTable = loadImage('./assets/gui/Table_01.png');
    //62 x 48
    resource1 = loadImage('./assets/combatShips/playerShips/resource_1.png');
    resource4 = loadImage('./assets/combatShips/playerShips/resource_3.png');
    resource3= loadImage('./assets/combatShips/playerShips/resource_3.png');
    
}

function guiSetup(){
    // textSize(30);
    // textStyle(BOLD);
    // fill("white");
    // textAlign(LEFT, CENTER);

    
    // buy_button_sprite1 = new Sprite(1100,150);
    // buy_button_sprite1.image = buy_button;
    
    // buy_button_sprite2 = new Sprite(1100,225);
    // buy_button_sprite2.image = buy_button;
    
    

}

function guiStart(){
    resourceCounterControl();
    // openShop();
    
}

function resourceCounterControl(){
    //200 x 62
    textSize(30);
    textStyle(BOLD);
    fill("white");
    textAlign(LEFT, CENTER);
    image(resourceCounter, 950,50);
    image(resource_icon, 970,60);
    text(totalResource, 1005, 73);
}

function openShop(){
    image(backgroundTable, 980,120);
    backgroundTable.resize(75,60);
    image(resource1, 985,125);
    // image(buy_button,950,110);
    // buy_button.resize(80, 0);

    image(backgroundTable, 980,195);
    backgroundTable.resize(75,60);
    image(resource4, 1000,200);

    
    
    
    
}