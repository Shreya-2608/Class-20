var fixed_rect, moving_rect;

function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(100,200,50,50);
  fixed_rect.debug = true;
  fixed_rect.velocityX = -5;
  moving_rect = createSprite(700,200,50,50);
  moving_rect.debug = true;
  moving_rect.velocityX = 5;
}

function draw() {
  background("black"); 
  
  //moving_rect.x = World.mouseX;
  //moving_rect.y = World.mouseY;
   console.log(moving_rect.x);
  if(fixed_rect.x - moving_rect.x < fixed_rect.width/2 + moving_rect.width/2
    && moving_rect.x-fixed_rect.x < fixed_rect.width/2 + moving_rect.width/2
    && fixed_rect.y - moving_rect.y < fixed_rect.height/2 + moving_rect.height/2
    && moving_rect.y - fixed_rect.y < fixed_rect.height/2 + moving_rect.height/2) {
      fixed_rect.shapeColor = "red";
      moving_rect.shapeColor = "red";
    }
    else{
      fixed_rect.shapeColor = "green";
      moving_rect.shapeColor = "green";
    }
  
  if(fixed_rect.x - moving_rect.x < fixed_rect.width/2 + moving_rect.width/2
    && moving_rect.x-fixed_rect.x < fixed_rect.width/2 + moving_rect.width/2){
      moving_rect.velocityX = moving_rect.velocityX * (-1);
      fixed_rect.velocityX = fixed_rect.velocityX * (-1);
    }
  if(fixed_rect.y - moving_rect.y < fixed_rect.height/2 + moving_rect.height/2
    && moving_rect.y - fixed_rect.y < fixed_rect.height/2 + moving_rect.height/2){
      moving_rect.velocityY = moving_rect.velocityY * (-1);
      fixed_rect.velocityY = fixed_rect.velocity * (-1);
    }  
    drawSprites();
}