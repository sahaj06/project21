var canvas;
var music;
var box1, box2,box3,box4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     
box1 = createSprite(690,600,200,20)
box1.shapeColor = "orange"; 

box2 = createSprite(480,600,200,20)
box2.shapeColor = "red";

box3 = createSprite(270,600,200,20)
box3.shapeColor = "black"

box4 = createSprite(60,600,200,20)
box4.shapeColor = "pink"
    //create box sprite and give velocity
    ball = createSprite(520,10,50,50)
    ball.shapeColor = "white";
       ball.velocityX = 2;
       ball.velocityY = 2;
}

function draw() {
background("blue");

    
    //create edgeSprite
    createEdgeSprites();
    ball.y=World.mouseY;
    ball.x=World.mouseX;
drawSprites();


    //add condition to check if box touching surface and make it box

    if(box1.isTouching(ball)){
    ball.shapeColor = "orange"
    music.play();
    }
    else
    if(box2.isTouching(ball)){
  ball.shapeColor = "red"
  music.play();
    }
    else
    if(box3.isTouching(ball)){
    ball.shapeColor = "black"
    music.play();
    }
    else
    if(box4.isTouching(ball)){
   ball.shapeColor = "pink"
   music.play();
    }
}

