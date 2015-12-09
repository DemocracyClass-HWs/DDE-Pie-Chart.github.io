function setup() {
  //backgroundImage = loadImage("image.jpg");
  var canvas = createCanvas(900, 100);
  canvas.parent('p5-banner');
  
}

function draw() {
  
  background(100,160,250);
  
  /* In case we want a border
  stroke(0,255,255);
  strokeWeight(10);
  noFill();
  rect(0,0,width,height);
  noStroke();
  */
  
  textSize(32);
  textAlign('center') ;
  fill(255);
  var title = "2016 Presidential Election";
  text(title, width/2, height/2+10);
  

}