var starImg, fairyImg, bgImg;
var fairy , fairyVoice, fairyBody;
var star, star2, star3, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	// star2 = createSprite(600,70);
	// star2.addImage(starImg);
	// star2.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0, isStatic:false, friction:0});
	World.add(world, starBody);
	
	star2Body = Bodies.circle(600 , 70 , 5 , {restitution:0, isStatic:false, friction:0});
	World.add(world, star2Body);

	star3Body = Bodies.circle(200 , 100 , 5 , {restitution:0, isStatic:false, friction:0});
	World.add(world, star3Body);

	fairyBody = Bodies.rectangle(170,520, 200,40, {isStatic:true, friction:0});
	World.add(world, fairyBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
	//rect(fairyBody.position.x,fairyBody.position.y,200)
  star.x = starBody.position.x;
  star.y = starBody.position.y;
  
  fairyBody.position.x = fairy.x+50;
  fairyBody.position.y = fairy.y;
//   star2.x = star2Body.position.x;
//   star2.y = star2Body.position.y;
	image(starImg, star2Body.position.x,star2Body.position.y,20,20);
	image(starImg, star3Body.position.x, star3Body.position.y,40,40);
  drawSprites();
	if(keyDown(LEFT_ARROW)){
		fairy.x = fairy.x-10
	}
	if(keyDown(RIGHT_ARROW)) {
		fairy.x = fairy.x+10
	}
}
