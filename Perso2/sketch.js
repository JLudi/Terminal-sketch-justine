var song;
var fft; //frenquencies analysis
var binCount = 1024; //découpage des fréquences (en 1024 petits bouts)
var h = window.innerHeight;
var w = window.innerWidth;


/**function preload() {
  song = loadSound('assets/Source.mp3');
}**/

function setup() {
  createCanvas(w,h);
  var smoothing = 0.6;
  fft = new p5.FFT(smoothing, binCount);
  fft.setInput(song);
  //song.setVolume(0.5); //régler le volume du morceau
}

function draw() {
  background(255);
  var tableau = fft.analyze(binCount);
  var largeurRect = 0;
  //console.log(tableau);

  for (var i = 0; i < tableau.length; i++) {
    rect(largeurRect,h,10,-tableau[i]);
    largeurRect = largeurRect + 10;
  }
}

function windowResized() {
  // commande java comme println("") dans p5.js pour voir dans la console
  console.log("resized:" + windowWidth);
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  song.play();
}
