class ball{

  constructor(x,y,r){
    var options={
     resitution:0.3,
     isStatic:false,
     friction:0.5,
     density:1.2
    }
    this.r=r
    this.body = Bodies.circle(x,y,this.r,options);
  World.add(world,this.body)
  }


   display(){
   var position = this.body.position
   push()
   translate(position.x,position.y);
   fill("red");
   strokeWeight(1);
   ellipseMode(RADIUS);
   ellipse(0,0,this.r,this.r);
  pop()
   }

}


