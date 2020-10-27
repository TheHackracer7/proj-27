
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var options;

var bob1,bob2,bob3,bob4,bob5;

var roof;

var rop1,rop2,rop3,rop4,rop5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(200,350,50);
	bob2=new Bob(250,350,50);
	bob3=new Bob(300,350,50);
	bob4=new Bob(350,350,50);
	bob5=new Bob(400,350,50);

	roof=new Roof(310,100,400,20);

 	rop1=new Rope(bob1.body,roof.body,200,350);
	rop2=new Rope(bob2.body,roof.body,250,350);
	rop3=new Rope(bob3.body,roof.body,300,350);
	rop4=new Rope(bob4.body,roof.body,350,350);
	rop5=new Rope(bob5.body,roof.body,400,350);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rop1.display();
  rop2.display();
  rop3.display();
  rop4.display();
  rop5.display();
  
  drawSprites();
 
}



