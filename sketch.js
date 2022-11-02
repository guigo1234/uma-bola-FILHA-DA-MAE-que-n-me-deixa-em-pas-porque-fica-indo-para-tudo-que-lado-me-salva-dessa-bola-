
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane
var jorgin
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var plane_options={
	isStatic:true
}
plane=Bodies.rectangle(400,690,800,20,plane_options)
World.add(world,plane)
	Engine.run(engine);
	var jorgin_options={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
jorgin=Bodies.rectangle(500,300,50,100,jorgin_options)
World.add(world,jorgin)

  
}



function draw() {
  rectMode(CENTER);
  background('red');
  
  drawSprites();
 Engine.update(engine);
 rect(plane.position.x,plane.position.y,800,20)
 rect(jorgin.position.x,jorgin.position.y,50,100)
}



