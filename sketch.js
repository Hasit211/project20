var movingRect, fixedRect





function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green"
  movingRect=createSprite(400,100,80,30)
  movingRect.shapeColor="yellow"
}

function draw() {

  background(180,180,180);  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  
  if (fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2&&
    movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
  
  }else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="yellow"
  }
  
  
  
  
  drawSprites();
}