var song;
var fft; //frenquencies analysis
var binCount = 1024; //découpage des fréquences (en 1024 petits bouts)
var h = window.innerHeight;
var w = window.innerWidth;
var isPlaying = false;
var middleBass = 0;
var middleMid = 0;
var middleHigh = 0;
var sampleAmountBass = 20;
var sampleAmountMid = 50;
var sampleAmountHigh = 100;


function preload() {
  //song = loadSound('assets/stranger.mp3');
  song = loadSound('assets/Source.mp3');
  //song = loadSound('assets/hang.mp3');
  //song = loadSound('assets/mount.m4a');
  //song = loadSound('assets/thi.mp3');
  //song = loadSound('assets/thi.mp3');





}

function setup() {
  createCanvas(w,h,WEBGL);
  var smoothing = 0.6;
  fft = new p5.FFT(smoothing, binCount);
  fft.setInput(song);
  //song.setVolume(0.5); //régler le volume du morceau
}

function draw() {
  background(255,252,236);
  var tableau = fft.analyze(binCount);

  rotateZ(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateX(frameCount * 0.001);

  if (frameCount < 100) {
      //console.log(tableau);
  }

  middleBass = 0;
  middleMid = 0;
  middleHigh = 0;

  for(var i = 10; i < sampleAmountBass; i++){
    middleBass += tableau[i];
}
  for(var j=50; j< 50+sampleAmountMid; j++) {
  middleMid += tableau[j];
}
  for(var k=200; k< 200+sampleAmountHigh; k++) {
  middleHigh += tableau[k];
}
  var newColorMid = middleMid / sampleAmountMid;
  var newColorBass = middleBass / sampleAmountBass;
  var newColorHigh = middleHigh / sampleAmountHigh;

  console.log(newColorMid);
   // map :commande pour changer un rapport d'échelle. ex: 1 à 2000 on défini pour x2 que c'est = de 0 à 255 (spectre couleurs)

  //rose
  fill(255,0,newColorBass,newColorBass);
  rect(20,20,200,200);
  push();
  translate(0,0,200);
  fill(255,0,newColorBass,newColorBass);
  rect(20,20,200,200);
  pop();

  //vert
  push();
  translate(20,0,220);
  rotateY(PI/2);
  fill(0,newColorMid+200,200,newColorMid);
  rect(20,20,200,200);
  pop();
  //
  push();
  translate(220,0,220);
  rotateY(PI/2);
  fill(0,newColorMid+200,200,newColorMid);
  rect(20,20,200,200);
  pop();

  //bleu
  push();
  translate(-80,220,220);
  rotateX(PI/2);
  fill(40+newColorHigh,0,255,newColorHigh);
  rect(100,20,200,200);
  pop();
  //
  push();
  translate(-80,20,220);
  rotateX(PI/2);
  fill(40+newColorHigh,0,255,newColorHigh);
  rect(100,20,200,200);
  pop();


  for(var i = 0; i < tableau.length; i++){
  //push();
  //translate(10,0,0);
  //box(20,20,tableau[i]+20);
  //sphere(tableau[i]+20);
  //console.log(tableau);
  //pop();
}
}

function windowResized() {
  // commande java comme println("") dans p5.js pour voir dans la console
  console.log("resized:" + windowWidth);
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (isPlaying == false) {
  song.play();
  isPlaying = true;
  }

}
