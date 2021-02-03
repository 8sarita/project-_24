
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var stone1;
var iron1;
var rubber1;
var hammer1;
var sand1,sand2,sand3,sand4,sand5,sand6;
var rubber2;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(200,680,2000,20);
	stone1=new Stone(200,400,80,80);
	iron1=new Iron(600,200,80,50);
	rubber1=new Rubber(800,200,100,100);
	hammer1=new Hammer(100,300,120,30);
	sand1=new Sand(200,400,20);
	sand2=new Sand(240,400,20);
	sand3=new Sand(260,400,20);
	sand4=new Sand(280,400,20);
	sand5=new Sand(300,400,20);
	sand6=new Sand(320,400,20);
	
    
	Engine.run(engine);
	
  
}


function draw() {

	Engine.update(engine);

  rectMode(CENTER);
  background("lightblue");
  
  
  ground1.display();
  stone1.display();
  iron1.display();
  rubber1.display();
  hammer1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();

  drawSprites();
 
}



