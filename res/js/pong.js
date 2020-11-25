var maxHeight = 100
var flipperHeight = maxHeight / 3

var flipperL = maxHeight / 2;
var flipperR = maxHeight / 2;

var maxFlipperY = maxHeight - flipperHeight;
var minFlipperY = 0;

var ballVelocity = [0, 0]
var ballPosition = [0, 0]

function getRandomVel() {
  return [(Math.random() - 0.5) > 0 ? 7 : -7, (Math.random() - 0.5) * 10];
}

function lerp(a, b, t){
  t = Math.min(1, t);
  t = Math.max(0, t);
  return a + (a-b) * t;
}

function setup() {
  createCanvas(windowWidth, maxHeight);
  ballPosition = [windowWidth / 2, maxHeight / 2];
  ballVelocity = getRandomVel();
}

function draw() {
  clear();
  background("#111210");
  
  stroke(255, 255,255);

  textSize(50);
  textAlign(CENTER, CENTER);
  textFont("Square");
  text('anthonyme00', windowWidth/2, maxHeight/2);
  
  var pos = Math.max(Math.min(maxFlipperY, ballPosition[1] - flipperHeight / 2), minFlipperY);
  
  var posL = lerp(flipperL, pos, 1-(ballPosition[0]-25)/(windowWidth-25))
  rect(25, posL, 10, flipperHeight);
  
  var posR = lerp(flipperL, pos, 1-(windowWidth - ballPosition[0] + 25)/(windowWidth-25))
  rect(windowWidth - 25, posR, 10, flipperHeight);

  circle(ballPosition[0], ballPosition[1], 10);

  ballPosition[0] += ballVelocity[0];
  ballPosition[1] += ballVelocity[1];
  if(ballPosition[0] > windowWidth - 25 || ballPosition[0] < 35){
    ballVelocity = getRandomVel();
  }
  if((ballPosition[0] > windowWidth - 25 && Math.sign(ballVelocity[0]) > 0) || (ballPosition[0] < 35 && Math.sign(ballVelocity[0]) < 0)){
    ballVelocity[0] *= -1;
  }
  if((ballPosition[1] > maxHeight - 5&& Math.sign(ballVelocity[1]) > 0) || (ballPosition[1] < 5 && Math.sign(ballVelocity[1]) < 0)){
    ballVelocity[1] *= -1;
  }
}