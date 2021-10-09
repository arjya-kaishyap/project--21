var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(1000,800);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "red";
    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "green";
    block3 = createSprite(550,580,260,30);
    block3.shapeColor = "yellow";
    block4 = createSprite(840,580,260,30);
    block4.shapeColor = "blue";

 

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
   // ball.shapeColor = rgb(255,255,255);
   // ball.velocityX = 0.3;
    //write code to add velocityX and velocityY
    ball.velocityX = 10;
    ball.velocityY = -10;


}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);


    
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "red";
        music.stop()   
      }



        if(block2.isTouching(ball) && ball.bounceOff(block2)){
            ball.shapeColor = "green";
          }
        //write code to stop music

    

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow"; 
      }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "blue";  
      }

    //write code to bounce off ball from the block3
    ball.bounceOff(block1);
    ball.bounceOff(block2);


    //write code to bounce off ball from the block4
    ball.bounceOff(block3);
    ball.bounceOff(block4);

    drawSprites();
}
