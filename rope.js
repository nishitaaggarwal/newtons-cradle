class rope {
    constructor (a,b) {
        var options={bodyA:a,
            pointB:b,
stiffness:0.04
        }
    
      this. rope= Matter.Constraint.create(options)
      this.pointB=b
       World.add(world,this.rope)
        }
fly(){

this.rope.bodyA=null    
 }

    display(){
        if (this.rope.bodyA!=null){
            line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
        }


        
    }
}