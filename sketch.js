var ufo;
var asteroid1,asteroid2,asteroid3,asteroid,asteroidGroup,asteroids;
var Background;
var laser, laserImg, laserGroup;
var SpaceShip;
var GameState = "Play";
var score = +1;


function preload(){
  ufo = loadImage("Images/ufo1.png");
  asteroid1 = loadImage("Images/Asteroid.png");
  asteroid2 = loadImage("Images/asteroid2.png")
  asteroid3 = loadImage("Images/asteroid3.png")
  laserImg = loadImage("Images/laser.png");
  spaceShip = loadImage("Images/SpaceShip.png");
  Background = loadImage("Images/Background.png");

}

function setup() {
  createCanvas(1000,600);
  SpaceShip = createSprite(400, 470, 50, 50);
  SpaceShip.addImage(spaceShip);
  SpaceShip.scale = 0.3;
laserGroup = new Group();  
asteroidGroup = new Group();
Background.velocityY = 1;
}

function draw() {
  background(Background); 
 
 if (GameState === "Play"){
   if(background.y > 600){
     background.y = 400;
   }
  if (keyDown(LEFT_ARROW)){
    SpaceShip.x = SpaceShip.x-4;
  } 
  if(keyDown(RIGHT_ARROW)){
    SpaceShip.x = SpaceShip.x+4;
  }

if (keyDown("SPACE")){
  laser = createSprite(SpaceShip.x,SpaceShip.y - 130);
      laser.addImage(laserImg);
      laser.velocityY = -8; 
      laser.scale = 0.7;
      laserGroup.add(laser);
      //console.log(laser.x);
      shoot = laser.y;
}


  }
  asteroids();
  drawSprites();
}


function asteroids() {
  if(frameCount % 110 === 0) {
  
    var asteroid = createSprite(Math.round(random(50,1350)),-20);
    asteroid.velocityY = (6 + score/10);
    asteroid.lifetime = 200;
    asteroid.scale = random(0.4,0.5);
    //asteroid.debug = true;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: asteroid.addImage(asteroid1);
              asteroid.setCollider("circle",-80,10,160);
              asteroid.scale = 0.1;
              break;
      case 2: asteroid.addImage(asteroid2);
              asteroid.setCollider("circle",50,0,150);
              break;
      case 3: asteroid.addImage(asteroid3);
              asteroid.setCollider("circle",0,0,170)
      default: break;
    }
    
    //console.log(asteroid.x);
    asteroidGroup.add(asteroid);
  }
}




