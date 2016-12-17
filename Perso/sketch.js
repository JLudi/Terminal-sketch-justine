var mappedX;
var mappedY;
var system;


function preload() {

  mySound = loadSound('assets/Source.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  system = new ParticleSystem(createVector(width/2, 50));
  mySound.setVolume(0.1);
  mySound.play();
}

function draw() {
  noStroke();

  //(-,input,output,-,-)
  mappedX = map(mouseX,0,width,0,200);
  mappedY = map(mouseY,0,height,200,0)
  //background(mappedX); //value 0-255
  fill(mappedY,mappedX,255);
  //fill(mouseX,random(50),random(150));
  //print(mouseX,mouseY);
  //ellipse(mouseX,mouseY,mappedX,mappedX);
  system.addParticle();
  system.run();
}
function windowResized() {
  // commande java comme println("") dans p5.js pour voir dans la console
  console.log("resized:" + windowWidth);
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  background(255);
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.01);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 1;
};

// Method to display
Particle.prototype.display = function() {
  noStroke();
  //stroke(200, this.lifespan);
  //strokeWeight(2);
  fill(mappedY, mappedX);
  ellipse(this.position.x, this.position.y, 1, 1);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 0.1);
    }
  }
};
