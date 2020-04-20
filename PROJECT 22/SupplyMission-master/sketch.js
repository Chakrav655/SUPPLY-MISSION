var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	textSize(24);
    fill("CadetBlue");
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=rgb(26, 188, 156);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("coral");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if (keyDown(DOWN_ARROW)){
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
  }

  
console.log(packageBody.position.x,packageBody.position.y);

  drawSprites();
  text("DROP ZONE",320,50);
  text("PRESS V ARROW TO RELESE THE PACKAGE",150,100);
  if (packageBody.position.y>=639){
	textSize(120);
	fill("Aquamarine");
	text("DELIVERED",70,400);
	groundSprite.shapeColor="crimson";
}

 else{
	textSize(120);
	fill("HoneyDew");
	text("ZOMBIELAND",10,400);
 }
 
 
}



