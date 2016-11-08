var words = ["in","the","infinite","space","there","was","nothing","but","vaccum"];
var words2 = ["wow","swag"];
var outputText = "";
var offset = 20;
var counter = 0;

function setup() {
    print(words);
    createCanvas(windowWidth, windowHeight);
    textSize(30);

}

function draw() {
  counter += 1;
  // modulo, imprimer "yeah" quand le modulo n'a pas de reste suite à la division (%)
  if (counter % 100 == 0) {
    doPermutations();
  }
  /** désactivé
  background(255);
  //shuffle(words,true);
  for (var i=0; i < words.length; i+=1) {
    //print(words[i]);
    outputText = outputText + " " + words[i];
    //text(words[i],100 + i*100,100);
  }
  text(outputText,100,100);
  outputText = "";
  //text(words[0],100,100);
  //text(words[1],100,200);
  //text(words[2],100,300);
  //text(words[3],100,400);
  **/
}

function mousePressed() {
  doPermutations();
}

function doPermutations() {
  print(counter);
  shuffle(words,true);
  outputText = "";
  for (var i=0; i < words.length; i+=1) {
    outputText = outputText + " " + words[i];
  }
  text(outputText,100,100 + offset);
  offset += 20;
  //print("mouse");
}
