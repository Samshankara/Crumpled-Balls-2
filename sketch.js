
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,bin,bin2,bin3,waste;


function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(400,500,800,20);
	bin=new Dustbin(500,300,200,200,PI/10);  
	waste=new Waste(170,380,40);

}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  ground.display();
  bin.display();
  waste.display();

 
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(waste.body,waste.body.position,{x:100,y:-100});
}

}

