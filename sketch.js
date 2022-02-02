
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var quadrado;
var bola;
var retangulo;
var solo;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
	
	var quadrado_opitions = {
		restitution:0.7
	}
	var solo_opitions = {
		isStatic:true
	}
	var retangulo_opitions = {
		restitution:0.7
	}
	var bola_opitions = {
		restitution:0.7
	}

	//Crie os Corpos Aqui.
	quadrado = Bodies.rectangle(400, 400, 60, 60, quadrado_opitions);
	World.add(world,quadrado);
	solo =  Bodies.rectangle(400, 690, 800, 20, solo_opitions);

	retangulo = Bodies.rectangle(600, 600, 120, 60, retangulo_opitions);
	World.add(world,retangulo);

	bola = Bodies.circle(200, 200, 60, bola_opitions);
	World.add(world,bola);


	World.add(world,solo);

	World.add(world,bola);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(quadrado.position.x,quadrado.position.y,60, 60)
  rect(solo.position.x,solo.position.y,800, 20)
  rect(retangulo.position.x,retangulo.position.y,120, 60)
  ellipse(bola.position.x,bola.position.y,60)
  
  
  drawSprites();
 
}



