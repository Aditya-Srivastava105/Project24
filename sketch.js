
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	Matter.Bodies.circle(200,700,22,options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
  
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.postion,{x:85,y:-85});
	}

}


