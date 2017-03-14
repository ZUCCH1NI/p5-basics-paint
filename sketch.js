var newWidth = 50;
var newHeight = 50;

//setup function executes once
function setup(){
    createCanvas(600,400);
    background(0,500,0);
}

//draw function loops forever
function draw(){
    //background(0,500,0);
    if(mouseIsPressed){
        noStroke();
    fill(0,0,150,50);
    ellipse(mouseX,mouseY,newWidth,newHeight);
}
    
}
    
