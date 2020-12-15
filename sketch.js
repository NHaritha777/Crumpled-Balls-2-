const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperbody,ground	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	dustbin1=new dustbin(1200,650);
	paperbody=new paper(200,450,70);
	ground=new Ground(width/2,670,width,20);
	//Create a Ground
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  dustbin1.display();
  paperbody.display();
  ground.display();
  
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperbody.body,paperbody.body.position,{x:130,y:-145});
}
}
