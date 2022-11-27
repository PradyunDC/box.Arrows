var box
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,30,30)
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
   box.position.x += 7
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y += 7
   }
   if(keyIsDown(UP_ARROW)){
    box.position.y -= 7
   }
   if(keyIsDown(LEFT_ARROW)){
    box.position.x -= 7
   }
drawSprites()
}




