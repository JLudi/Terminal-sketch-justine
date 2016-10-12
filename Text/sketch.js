//var text1 = "coucou";
//var text2 = "tu veux";
//var text3 = "voir ma";
//var text4 = "création ?";
var words = ["trop","2","swag",";)"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //print(text1);
  textSize(50);
  for (var i=0; i < 4; i++) {
    var randomNumber = int(random(6));
    text(words[i],50,50 + 50*i);
  }
  //var phrase = text1 + " " + text2 + " " + text3 + " " + text4;
  //text(words[0],50,100);
  //text(text1,mouseX,mouseY); //curseur avec texte
}

function mousePressed() {
  background(255);
}
