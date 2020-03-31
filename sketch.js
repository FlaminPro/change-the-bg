
var creater;
function setup() {
  createCanvas(500, 400);
  creater = createSprite(20, 400, 20, 20);
}


function draw() {
  background(225);
  creater.x = mouseX;
  if (creater.x > 0) {
    background("orange");
  }

  if (creater.x > 50) {
    background("yellow");
  }
  if (creater.x > 100) {
    background("dlightgreen");
  }
  if (creater.x > 150) {
    background("lightblue");
  }
  if (creater.x > 200) {
    background("darkblue");
  }
  if (creater.x > 250) {
    background("violet");
  }
  if (creater.x > 300) {
    background("darkvoilet");
  }
  if (creater.x > 350) {
    background("darkgreen");
  }
  if (creater.x > 400) {
    background("darkred");
  }
  if (creater.x > 450) {
    background("red");
  }


  drawSprites();
}