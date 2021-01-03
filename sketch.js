var car,wall;
var speed,weight,rating;
var deformation;
var state="run";

function setup()
{

  createCanvas(600,600);


  car = createSprite(150,300,20,20);
  wall = createSprite(500,300,20,100);
  


}

function draw()
{


background("black");


if(state="run")
{


  deformation=random(0,500);
speed=random(1,5);
car.velocityX=speed;
weight=random(400,1500);


if(wall.x-car.x < (car.width+wall.width)/2)

{

  car.velocityX=0;
var deformation = 0.5*weight*speed*speed/22509;

if(deformation>180)
{

car.shapeColor = "green";

}

if(deformation<180 && deformation>100)
{

car.shapeColor = "purple";

}

if(deformation<100)
{

car.shapeColor = "white";

}

}



}






  drawSprites();
}