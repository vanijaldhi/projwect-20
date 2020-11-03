var bullet , wall, thckness;
var speed , weight;
var deformation;

function setup() {
  createCanvas(1600,400);
 
  thickness = random(20,80);
  speed = random(230,320);
  weight = random(30,50);

  bullet= createSprite(50,200,25,25);
  bullet.velocityX = speed;
  bullet.shapeColor = "white"

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
 
}

function draw() {
  background(255,255,255);  

  if(bullet.collide(wall)){
      bullet.velocityX = 0;
  }

 if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    
    bullet.velocityX=0;
 
  deformation = (0.5*speed*width*speed)/22500;
  
    if(deformation > 180){
        bullet.shapeColor = color(255,0,0);
    }

    if(deformation < 180 && deformation > 100){
        bullet.shapeColor = color(230,230,0);
    }

    if(deformation < 100){
        bullet.shapeColor = color(0,255,0);
    }
  }
  console.log(bullet);
  drawSprites();
}

