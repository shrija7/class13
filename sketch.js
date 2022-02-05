var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;




var score;


function preload(){
  //animations are added
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  //images are added
  groundImage = loadImage("ground2.png");
  
 cloud1=loadImage("cloud.png")
  
}

function setup() {
//canvas is created
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
 //animation is added to trex
  trex.addAnimation("running", trex_running);
  //size of trex is reduced
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  //image is added to ground
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
 //velocity is given to the ground
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
 //invisibleground is made invisible
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if(frameCount%50===0){
//clouds are created
 cloud=createSprite(600,100,40,10);
 //image is added to the cloud
 cloud.addImage(cloud1)
 //clouds are reduced
 cloud.scale=0.5
 cloud.y=Math.round(random(10,80))
 cloud.velocityX=-3;
 
}

}



