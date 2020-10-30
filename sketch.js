var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxborder1,boxborder2,boxborder3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	boxborder1=createSprite(400,652,130,15)
	boxborder1.shapeColor = color("red");
	
	boxborder2=createSprite(340,610,15,120)
	boxborder2.shapeColor = color("red");

	boxborder3=createSprite(456,610,15,120)
	boxborder3.shapeColor = color("red");
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:false})
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxborder1 = Bodies.rectangle(400,652,130,15,{iStatic:true});
	World.add(world,boxborder1);

	boxborder2 = Bodies.rectangle(340,610,15,120,{isStatic:true});
	World.add(world,boxborder2);
	
	boxborder3 = Bodies.rectangle(456,610,15,120,{isStatic:true});
	World.add(world,boxborder3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background(0);
 
  Engine.update(engine)
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  helicopterSprite.velocityX = 3;
  packageSprite.gravity = 1
 
 drawSprites();
 
}











