var car,wall;
var speed,weight;
function setup() {
  
 var canvas = createCanvas(1600,400);
  
  speed= random (55,90);
  weight= random(400,1500);

  car = createSprite(400, 200, 50, 50);
  car.shapeColor="white"

  wall = createSprite(1500, 200, 60,200);
  wall.shapeColor="grey"
 
  car.velocityX= speed;
}

function draw() {
  background("black");  
if(wall.x-car.x<(car.width+19)){
  car.velocityX=0;
  var deformation=0.5* weight * speed * speed/22500;
  if(deformation<180){
    car.shapeColor=("green")
  }
  if(deformation<180 && deformation>100){
    car.shapeColor=("yellow")
  }
  if(deformation<100){
    car.shapeColor=color("blue");
  }
}

  drawSprites();
}