var box
function setup() {
  createCanvas(400,400);
  box=createSprite(100,200,40,40)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
   box.velocityX=5 
  }
drawSprites()
}




