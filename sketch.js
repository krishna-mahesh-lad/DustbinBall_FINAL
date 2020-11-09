const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,ball,ground,box;

function preload()
{
    
}

function setup() {
    createCanvas(1500, 600);
    

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.

    ball = new PAPER(20,300,70);
    ground = new GROUND(750,580,1500,10);
    boxRight = new BOX(1035,500,10,120);
    boxLeft = new BOX(925,500,10,120);
    dustbinMain = new DUSTBIN(910,435,140,140);
    
    Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background("white");
    
    Engine.update(engine);

    ball.display();
    ground.display();
    boxRight.display();
    boxLeft.display();
    dustbinMain.display();

  drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}
