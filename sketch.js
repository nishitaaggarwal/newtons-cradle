const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,rope1,roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

this.body=Bodies.rectangle(200,200,30,30)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball1 =  new ball(140,350)
 ball2 =  new ball(180,350)
 ball3 =  new ball(220,350)
 ball4 = new ball(260,350)
 rope1=new rope(ball1.body,{x:140,y:200});
 rope2=new rope(ball2.body,{x:180,y:200});
 rope3=new rope(ball3.body,{x:220,y:200});
 rope4=new rope(ball4.body,{x:260,y:200});
	Engine.run(engine);
  
}


function draw() {
	background(255);
  rectMode(CENTER);
  rect(this.body.position.x,this.body.position.y,220,30)
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  drawSprites();
}
function keyPressed()
{
     if(keyCode === UP_ARROW)
    { Body.applyForce(ball1.body,ball1.body.position,{x:-45,y:-45 })
    }   
 
}



