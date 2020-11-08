var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var house, houseImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var invisibleBlock, box1,box2,box3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	//houseImg = loadImage("house.png");

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityX=2;

	engine = Engine.create();
	world = engine.world;



	//house = createSprite(width/2, 600, 20,20);
	//house.addImage(houseImg);
	//house.scale=0.3;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	//helicopterSprite.velocityX=2;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	//invisibleBlock = createSprite(width/2,650,50,50)
	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1 = createSprite(width/2,650,200,20)
	box1.shapeColor=color("yellow")

	 
	 
	 
 
	 box2 = createSprite(300, 600,10,100);
	 box2.shapeColor=color("yellow")
	
 
 
	 box3 = createSprite(497,600,10,100)
	 box3.shapeColor=color("yellow")

	
	 
	

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
  drawSprites();
 
  

}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)
	
	
  }
}




