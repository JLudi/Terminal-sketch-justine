var mappedX;
var mappedY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  //(-,input,output,-,-)
  mappedX = map(mouseX,0,width,0,200);
  mappedY = map(mouseY,0,height,200,0)
  //background(mappedX); //value 0-255
  fill(mappedY,mappedX,255);
  //fill(mouseX,random(50),random(150));
  //print(mouseX,mouseY);
  ellipse(mouseX,mouseY,mappedX,mappedX);
}
function windowResized() {
  // commande java comme println("") dans p5.js pour voir dans la console
  console.log("resized:" + windowWidth);
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  background(255);
}
