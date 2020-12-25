class SlingShot{
    constructor(mybodyA,myPointB){
      var option={
        bodyA:mybodyA,
        pointB:myPointB,
        stiffness:0.4,
        lenght:10
      }  
      this.pointB=myPointB;
      this.sling=Constraint.create(option);
      World.add(world,this.sling);

    }
    
    fly(){
      this.sling.bodyA=null;
    }

   display(){
     if(this.sling.bodyA){
       var pointA=this.sling.bodyA.position;
       var pointB=this.pointB;
       strokeWeight(3);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
     }
   }
}