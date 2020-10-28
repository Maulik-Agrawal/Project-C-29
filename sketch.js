
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy_img = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(235,420,30);
	tree = new Tree(1050,295);
	ground = new Ground(650,600,1300,40);

	mango1 = new Mango(1000,100,30);
	mango2 = new Mango(1200,200,20);
	mango3 = new Mango(1110,300,30);
	mango4 = new Mango(930,100,30);
	mango5 = new Mango(1051,200,20);
	mango6 = new Mango(971,300,30);
	mango7 = new Mango(1149,150,20);
	mango8 = new Mango(972,250,30);

	slingshot = new SlingShot(stone.body,{x: 241, y: 433});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("Grey");

  console.log(mouseX);
  console.log(mouseY);

  image(boy_img, 200,353,200,300);

  stone.display();
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  slingshot.display();
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased()
{
	slingshot.fly();
}

