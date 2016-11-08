

function setup() {
    createCanvas(windowWidth, windowHeight);
    //.json standard facile à créer et à lire//
    loadJSON("data.json",drawData);
    print("...setting up...");
    textAlign(CENTER,CENTER);
    textSize(15);
    noStroke();

}

function draw() {
}

function drawData(data) {
  print("...data loaded...");
  var i = 1
  for (var index in data) {
    //print(data[index].location);
    var age = data[index].age * 1;
    var name = data[index].name;
    var ageCorrect = Math.sqrt(age/Math.PI)*10;
    //print(age);
    fill(age*i,0,100);
    ellipse(100*i,100,ageCorrect,ageCorrect);
    text("version fausse",100,300);
    ellipse(100*i,400,age,age);
    fill(0);
    text(name,100*i,150);
    i += 1;
  }
}
