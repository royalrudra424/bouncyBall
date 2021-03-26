class Box{
    constructor(x,y,width,height){
        var constru ={
            restitution:1
        }
        this.body=Bodies.rectangle(x,y,width,height,constru);
        World.add(world,this.body)
    }
display(){
    var a =this.body.position;
    var angle=this.body.angle;
    push()
    translate(a.x,a.y)
    rotate (angle);
  rectMode(CENTER)  
  fill ("red");
  rect(0,0,50,50);
  pop();
}
}