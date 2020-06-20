
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject;	
var world;
var SlingShot;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(700,250,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	SlingShot=new slingShot(paperObject.body,{x:700,y:250});
	
}


function draw() {
  rectMode(CENTER);
  background(230);


  	Engine.run(engine);
	//Render.run(render);
    
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  SlingShot.display();



 
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
}

 function mouseReleased(){
     SlingShot.fly();
 }
