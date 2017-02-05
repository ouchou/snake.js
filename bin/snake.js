function snake(){
  this.x = 0;
  this.y = 0;
  this.xs = 1;
  this.ys = 0;
  this.total = 0;
  this.tail = [];
  this.count = 0;
  this.sdir = 3;
  
  this.update = function(){
    
    for(var i=0;i<this.tail.length-1;i++){
      this.tail[i] = this.tail[i+1];
    }
    this.tail[this.total-1]=createVector(this.x,this.y);
    
    this.x = this.x + this.xs * scl;
    this.y = this.y + this.ys * scl;
    
    this.x = constrain(this.x,0,width-scl);
	this.y = constrain(this.y,0,height-scl);
    
    this.show();
    
  }
  
  this.eat = function(pos){
    var d = dist(this.x,this.y,pos.f.x,pos.f.y);
    if(d < 1){
      this.total++;
      this.count++;
      return true;
    }else{
      return false;
    }
  }
  
  this.dead = function(){
    for(var i=0;i<this.tail.length;i++){
      var p = this.tail[i];
      var d = dist(this.x,this.y,p.x,p.y);
      if(d<1){
        this.total = 0;
        this.tail = [];
        this.count = 0;
        this.sdir = 0;
        return true;
      }
    }
  }
  
  this.dir = function(x,y){
    this.xs=x;
    this.ys=y;
  }
  
  this.show = function(){
    fill(255);
    for(var i=0;i<this.total;i++){
      rect(this.tail[i].x,this.tail[i].y,scl,scl);
    }
    rect(this.x,this.y,scl,scl);
    
  }
  
}