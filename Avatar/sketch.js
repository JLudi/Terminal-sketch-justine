// version 2

var xPos = 10;
var yPos = 10;
var d = 100;
var width, height;
//var counter = "coucou";
//var counter2 = "toi";

function setup() {
    // print("hello world");
    width = 1000;
    height = 300;
    createCanvas(width,height);
    // background(0,155,0);
    frameRate(1); // 1 frame par seconde
}

function draw() {
  // print(counter + " : " + counter2);
  // fill(0,0,255);
  // print("hello world");
  // rectangle (x,y,width,height)
  // rect(xPos,yPos,150,150);
  // line(x1,y1,x2,y2)
  strokeWeight(2);
  //line(0,height,width,0);
  line(0,height/2,width,0);
  line(0,height/2,width/2,0);
  line(0,height/3,width,0);
  line(0,height,width/3,0);
  strokeWeight(4);
  line(0,0,width,height);
  line(0,0,width,height/2);
  line(0,0,width/2,height);
  strokeWeight(6);
  line(0,0,width,height/3);
  line(0,0,width/3,height);
  //fill(255,0,0);
  ellipse(width/4,height/4,d,d);
  ellipse(width/2,height/2,d/2,d/2);
  ellipse(width/6,height/6,d/2,d/2);
  ellipse(width-200,height-100,d/2,d/2);
}
