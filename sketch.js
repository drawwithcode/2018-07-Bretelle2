var mic;
var capture;
var col = 400;
var rig = 300;

function preload() {

  mic = new p5.AudioIn();
  mic.start();

  capture = createCapture(VIDEO);
  capture.size(col, rig);
  capture.hide();

}
function setup() {
    createCanvas(windowWidth, windowHeight)
    noStroke();
    pixelDensity(1);
    imageMode(CENTER);
}

function draw() {
  translate(width/2, height/2);
  var vol = mic.getLevel()*1000;
  background(200);
  var myImage = capture.loadPixels();
  image(myImage, 0, 0, vol+100, vol+100);

  // ellipse(250,250,vol * 200);



}
