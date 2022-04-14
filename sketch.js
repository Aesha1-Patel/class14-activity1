var ball={
  x:200,
  y:200,
  r:25,
  color:["red","purple"],
  xSpeed:0,
  ySpeed:0,
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
fill (ball.color[1]);
  circle(ball.x,ball.y,ball.r);
ball.xSpeed=2;
ball.x=ball.x+ball.xSpeed;
}