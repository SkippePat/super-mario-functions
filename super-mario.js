// Player position
let x = 100;
let y = 300;
let running;
let runningLeft;
let standing;
let standingLeft;
let jumpingR;
let jumpingL;


// Jump state
let jumping = false;
let jumpFrame = 0;
let direct = "Right";
let moving = false

function setup() {
  createCanvas(600, 400);
  running = loadImage("Running.gif")
  running.resize(2,2);
  runningLeft = loadImage("RunningLeft.gif")
  runningLeft.resize(2,2);
  standing = loadImage("StandingRight.gif")
  standing.resize(2,2);
  standingLeft = loadImage("StandingLeft.gif")
  standingLeft.resize(2,2);
  jumpingR = loadImage("JUMPRIGHT.gif")
  jumpingR.resize(2,2);
  jumpingL = loadImage("JUMPLEFT.gif")
  jumpingL.resize(2,2);
  
}

function draw() {
  background(120, 190, 255); // sky

  // ground
  fill(60, 200, 90);
  rect(0, 330, width, 70);
  updateJump();

  drawPlayer();
  if (keyIsDown(65)) moveLeft();
  
  else if (keyIsDown(68)) moveRight();
  
  else moving = false;
  
}

// ==================================================
// JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function keyPressed() {
  if (key === " ") jump();
  
  if (key === "e") dash();

}

function moveRight(){
  x = x+5;
  direct="Right";
  moving = true;
  
}
function moveLeft(){
  x = x-5;
  direct="Left";
  moving = true;
}

function dash(){
  let dashing = 0;
  if (direct==="Right"){
    while (dashing <10 ){
      x=x+10
      dashing = dashing+1;
    }
  }
  if (direct==="Left"){
    while (dashing <10 ){
      x=x-10
      dashing = dashing+1;
    }
  }
}

// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 300 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  if (keyIsDown(68)){
    image(running,x,y-50)
  }
  else if (keyIsDown(65)){
    image(runningLeft,x,y-50)
  }
  else if (jumping===true && direct==="Right"){
      image(jumpingR,x,y-50)
    }
  else if (jumping===true && direct==="Left"){
      image(jumpingL,x,y-50)
    }
  else
    if (direct==="Right"){
      image(standing,x,y-50)
    }
    else{
      image(standingLeft,x,y-50)
    }
  
}