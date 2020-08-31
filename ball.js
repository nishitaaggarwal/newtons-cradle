class ball{
    constructor(x,y)
  {
    var options={

    restitution:0.8,
    density :2
  }
  this.body= Bodies.circle(x ,y ,20,options)

   World.add(world,this.body)
  }
  display() 
  {  push();
    ellipseMode(RADIUS)
    ellipse(this.body.position.x,this.body.position.y,20,20)
    pop();
  }

}
