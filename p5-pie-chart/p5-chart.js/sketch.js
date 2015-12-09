//  DDE Voting Booth Dynamic Pie Chart 
//  Hans Heidmann 2015


var r,g,b,a; // for my tasty pie's slice colors...

var candidates = ["Hillary Clinton",  
                  "Bernie Sanders",   
                  "Martin O’mally",   
                  "Donald Trump", 
                  "Ben Carson",    
                  "Marco Rubio"
                  ]
                  
var votes = [0,0,0,0,0,0];
var randomVote = 0; 
var totalVotes = 0;

var lastAngle = 0;

var angles = [1,1,1,1,1,1];



function setup() {
  canvas = createCanvas(700, 500);
  canvas.position(50, 50);
  //canvas.parent("p5-container");
  
  button = createButton('generate random vote');
  button.position(canvas.x+ 20, canvas.y + height - 50);
  button.mousePressed(addVote);

  noLoop();
}

function draw() {
  
  strokeWeight(3);
  stroke(0);
  
  background(0);

  fill(random(255));
  text(candidates, 10,10);
  text(votes, 10,25);
  text("totalVotes: " + totalVotes, 10,40);
  text("randomVote:" + randomVote, 10,55);
  
  
  if (totalVotes == 0) {
      fill(255);
      ellipse(width/2, height/2, 200, 200);
  }
  
  else if (totalVotes == 1) {
    for(var v=0; v<6; v++) {
      if(votes[v] == 1) {
        if (v<3) {
          fill(255,0,0);
          ellipse(width/2, height/2, 200, 200);
          break;
        } else {
          fill(0,0,255);
          ellipse(width/2, height/2, 200, 200);
        }
      }
    }
    
  } 
  
  else if (totalVotes >= 2) {
    
    startAngle = floor(random(360));
    
    for (var i = 0; i < totalVotes; i++) { // data.length = 6 (6 candidates)
      
    
      
      if (i < 3) {
        r = floor(random(0,255));
        g = floor(random(0,255));
        b = floor(random(0,255));
      }
      
      var color = (r,g,b);
      
      fill(color);
      
      // arc(x,y,width,height,startAngle,stopAngle,[mode])
      arc(width/2, height/2, 200, 200, startAngle, startAngle+lastAngle+radians(angles[i]));
      lastAngle += radians(angles[i]);
      }
  
  } 
  

}


function addVote() {
  randomVote = floor(random(0,6)); 
  votes[randomVote] = votes[randomVote]+1;
  totalVotes++;
  var sum = 0;
  for(int c=0; c<totalVotes; c++) {
    sum += votes[c];
  }
  angles[randomVote] = 
  redraw();
} 




  