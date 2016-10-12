var xPos = 100;
var yPos = 100;
var d = 60;
var width, height;

function setup() {
    width = 788;
    height = 592;
    createCanvas(width,height);
    background(200,200,200);
}

function draw() {
  fill(100,100,100);
  //ellipse horizontale en bas
  ellipse(width-1.5*d,height-1.5*d,d,d);
  ellipse(width-(1.5*d)-xPos,height-1.5*d,d,d);
  ellipse(width-(1.5*d)-2*xPos,height-1.5*d,d,d);
  ellipse(width-(1.5*d)-3*xPos,height-1.5*d,d,d);
  ellipse(width-(1.5*d)-4*xPos,height-1.5*d,d,d);
  ellipse(width-(1.5*d)-5*xPos,height-1.5*d,d,d);
  ellipse(width-(1.5*d)-6*xPos,height-1.5*d,d,d);
  // ellipse verticale 7
  ellipse(width-(1.5*d),height-(1.5*d)-yPos,d,d);
  ellipse(width-(1.5*d),height-(1.5*d)-2*yPos,d,d);
  ellipse(width-(1.5*d),height-(1.5*d)-3*yPos,d,d);
  ellipse(width-(1.5*d),height-(1.5*d)-4*yPos,d,d);
  // ellipse verticale 6
  ellipse(width-(1.5*d)-xPos,height-(1.5*d)-yPos,d,d);
  ellipse(width-(1.5*d)-xPos,height-(1.5*d)-2*yPos,d,d);
  ellipse(width-(1.5*d)-xPos,height-(1.5*d)-3*yPos,d,d);
  ellipse(width-(1.5*d)-xPos,height-(1.5*d)-4*yPos,d,d);
  // ellipse verticale 5
  ellipse(width-(1.5*d)-2*xPos,height-(1.5*d)-yPos,d,d);
  ellipse(width-(1.5*d)-2*xPos,height-(1.5*d)-2*yPos,d,d);
  ellipse(width-(1.5*d)-2*xPos,height-(1.5*d)-3*yPos,d,d);
  ellipse(width-(1.5*d)-2*xPos,height-(1.5*d)-4*yPos,d,d);
  // ellipse verticale 4
  ellipse(width-(1.5*d)-3*xPos,height-(1.5*d)-yPos,d,d);
  ellipse(width-(1.5*d)-3*xPos,height-(1.5*d)-2*yPos,d,d);
  ellipse(width-(1.5*d)-3*xPos,height-(1.5*d)-3*yPos,d,d);
  ellipse(width-(1.5*d)-3*xPos,height-(1.5*d)-4*yPos,d,d);
  // ellipse vertical 3
  ellipse(width-(1.5*d)-4*xPos,height-(1.5*d)-yPos,d,d);
  ellipse(width-(1.5*d)-4*xPos,height-(1.5*d)-3*yPos,d,d);
  ellipse(width-(1.5*d)-4*xPos,height-(1.5*d)-4*yPos,d,d);
  // ellipse verticale 2
  ellipse(width-(1.5*d)-5*xPos,height-(1.5*d)-yPos,d,d);
  ellipse(width-(1.5*d)-5*xPos,height-(1.5*d)-2*yPos,d,d);
  ellipse(width-(1.5*d)-5*xPos,height-(1.5*d)-3*yPos,d,d);
  ellipse(width-(1.5*d)-5*xPos,height-(1.5*d)-4*yPos,d,d);
  // ellipse verticale 1
  ellipse(width-(1.5*d)-6*xPos,height-(1.5*d)-yPos,d,d);
  ellipse(width-(1.5*d)-6*xPos,height-(1.5*d)-2*yPos,d,d);
  ellipse(width-(1.5*d)-6*xPos,height-(1.5*d)-3*yPos,d,d);
  ellipse(width-(1.5*d)-6*xPos,height-(1.5*d)-4*yPos,d,d);
  //ellipse rouge
  fill(255,0,0);
  stroke(255,0,0);
  ellipse(width-(1.5*d)-4*xPos,height-(1.5*d)-2*yPos,d,d);
  stroke(100,100,100);
}
