num = 50;
theta = 0;
 
function setup() {
  createCanvas(500,500)
  background(0);
  stroke(255);
  strokeWeight(2);
  fill(255, 50);
  colorMode(HSB,255,100,100);
}
 
function draw() {
  background(0);
  translate(width/2, height/2);
  for (i=0; i<num; i++) {
    push();
    offSet = (TWO_PI/num*i);
    rotate(offSet);
    x1 = map(sin(theta+offSet*5),-1,1,0,80);
    x2 = x1 -50 ;
    x3 = 100;
    x4 = x3 + 100;
    fill(255.0/num*i,100,100,100);
    bezier(x1, 0, 100, -100, x3, 50, x4, -120);
    pop();
  }
  theta += 0.0523;
  //if (frameCount%3==0 && frameCount<121) saveFrame("image-###.gif");
}
