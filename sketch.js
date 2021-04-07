var sprite1, sprite2;
var car1, car2;
var bus1, bus2;

function setup() {
  createCanvas(800,600);

  sprite1 = createSprite(200, 200, 80, 50);
  sprite1.shapeColor="green";

  sprite2 = createSprite(400, 200, 50, 80);
  sprite2.shapeColor="green";

  car1=createSprite(100, 300, 30, 30);
  car1.shapeColor="blue";
  car1.velocityX=5;

  car2=createSprite(700, 300, 30, 30);
  car2.shapeColor="purple";
  car2.velocityX=-5;

  bus1=createSprite(100, 200, 30, 30);
  bus1.shapeColor="yellow";
  bus1.velocityY=5;

  bus2=createSprite(100, 400, 30, 30);
  bus2.shapeColor="orange";
  bus2.velocityY=-5;
}


function draw() {
  background(0);
  
  sprite1.x= mouseX

  sprite1.y= mouseY

  if(istouching(sprite1, sprite2)){
sprite1.shapeColor="blue";
sprite2.shapeColor="blue";
  }

else{
  sprite1.shapeColor="green";
  sprite2.shapeColor="green";

}

bounceoff(bus1, bus2)

bounceoff(car1, car2);

  drawSprites();
}