const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine ,world;
var bgImg;
var snowflakeImg;
var snowflake;
var array1 = [];
var maxSnow = 100;
var gift, giftImg;


function preload()
{
  bgImg = loadImage("snow1.jpg");
  giftImg = loadImage("gift.jpg")
  
}


function setup()
 {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snowflake = new snow(400,200,20,20); 
  snowflake.scale = 0.5
  
  
  gift = createSprite(500,350,20,20);
  gift.addImage(giftImg);
  gift.scale = 0.5;

  if(frameCount % 275 === 0){
    for(var i=0; i<maxSnow; i++){
    array1.push(new snow(random(0,1350), random(0,50)));
    }
    }

}

function draw() 
{
  background(bgImg);  
  Engine.update(engine);

 
  for(var i = 1 ;i<maxSnow; i++)
 {
    array1[i].display();
    array1[i].changePosition();
 }

  gift.display();

  drawSprites();
}