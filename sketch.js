var Mrect, Frect;

function setup() {
  createCanvas(800, 400);
  Mrect = createSprite(200, 200, 50, 50);
  Frect = createSprite(600, 200, 50, 50);
  Mrect.velocityX = 4;
  Frect.velocityX = -4;
  Mrect.shapeColor = "red";
  Frect.shapeColor = "blue";
}

function draw() {
  background(0);
  bounceOff();
  console.log(Mrect.y);
  drawSprites();
}
function bounceOff() {
  if (Mrect.x - Frect.x < Mrect.width / 2 + Frect.width / 2
    && Frect.x - Mrect.x < Mrect.width / 2 + Frect.width / 2
    && Mrect.y - Frect.y < Mrect.height / 2 + Frect.height / 2
    && Frect.y - Frect.y < Mrect.height / 2 + Frect.height / 2) {
    Mrect.velocityX = Mrect.velocityX * -1;
    Frect.velocityX = Frect.velocityX * -1;
  } else {
    Mrect.velocityX = Mrect.velocityX * 1;
    Frect.velocityX = Frect.velocityX * 1;
  }
}