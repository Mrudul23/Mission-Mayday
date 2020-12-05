var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundImage;
var tree,treeImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3
var man,manhappyImage,mansadImage
var thought,thoughtImage

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	groundImage=loadImage("ground.png")
	treeImage=loadImage("tree.png")
	mansadImage=loadImage("sad.png")
	manhappyImage=loadImage("happy.png")
	thoughtImage=loadImage("thought.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.35

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1.2

	groundSprite=createSprite(width/2, height-105, width,10);
	groundSprite.addImage(groundImage)
	groundSprite.scale=1.7
	groundSprite.depth=0.5

	tree=createSprite(700,450)
	tree.addImage(treeImage)

    man=createSprite(200,550)
    man.addImage(mansadImage)
	man.scale=0.8
	
	thought=createSprite(250,350)
	thought.addImage(thoughtImage)
	thought.scale=0.3
	
	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2, 105 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	wall1=new Brick(290,650,20,100);
	wall2=new Brick(400,690,200,20);
	wall3 =new Brick(490,650,20,100)
	Engine.run(engine);
  
}


function draw() {

  //rectMode(CENTER);
  background("skyblue")

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  wall1.display()
  wall2.display()
  wall3.display()
  fill("black") 
  textSize(20)
  textFont("monotype corsiva")
  text("Press down arrow or spacebar to drop package ↓ ",10,20)
  if(packageSprite.y>585){
	textAlign(CENTER)
	text("THANK",250,310)
	text("YOU",250,330)
	text("You saved",250,350)
	text("me",250,370)
	textSize(40)
	text("Package reached to the needy, Well done 👍",350,220)
	man.addImage(manhappyImage)
    }
  
  if(packageSprite.y<585){
	textAlign(CENTER)
	text("Help me",250,310)
	text("I need",245,330)
	text("supplies",250,350)
    }
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW||keyDown("space")) {
	 Matter.Body.setStatic(packageBody,false) 
  }
}



