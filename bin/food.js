var scl = 20;

function food(){
  this.f;
  
  
  this.pick = function(){
    var col = floor(width/scl);
    var row = floor(height/scl);
    this.f = createVector(floor(random(col)),floor(random(row)));
    this.f.mult(scl);
    this.show();
  }
  
  
  this.show = function(){
    fill(255,0,100);
    rect(this.f.x,this.f.y,scl,scl);
  }
  
  
}