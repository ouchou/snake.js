var s;
var scl = 20;
var fd;
var speed = 10;
var start =1;
var mou = 0;
var play;
var replay;


function setup() {
  createCanvas(600,600);
  frameRate(speed);
  s = new snake();
  fd = new food();
  fd.pick();
  play = createImg('media/pic/play.png').hide();
  play.position(150,150);
  replay = createImg('media/pic/replay.png').hide();
  replay.position(150,150);
}

function reset(){
  if(start === 1 && mou===0){
    play.show();
  }else if(start === 0 && mou === 0){
    replay.show();
  }else if(start === 1 && mou===1){
    play.hide();
  }else if(start === 0 && mou===1){
    replay.hide();
  }
}

function dauthc(){
  if(s.dead()){
    mou = 0;
    start = 0;
    s = new snake();
    fd = new food();
    fd.pick();
  }
}

function eatc(){
  if(s.eat(fd)){
    fd.pick();
    if(s.count === 10){
        speed++;
        frameRate(speed);
      }
  }
}

function draw() {
  background(51);
  reset();
  if(mou === 1){
  dauthc();
  eatc();
  fd.show();
  s.update();
  }
}

function mousePressed(){
  mou = 1;
}

function keyPressed(){
  if(keyCode === UP_ARROW && s.sdir != 2){
    s.sdir = 1;
	s.dir(0,-1);
  }else if(keyCode === DOWN_ARROW && s.sdir != 1){
    s.sdir = 2;
	s.dir(0,1);
  }else if(keyCode === RIGHT_ARROW && s.sdir != 4){
    s.sdir = 3;
	s.dir(1,0);
  }else if(keyCode === LEFT_ARROW && s.sdir != 3){
    s.sdir = 4;
	s.dir(-1,0);
  }
}