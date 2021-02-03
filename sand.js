class Sand{
    constructor(x,y,diameter){
        var options={
        restitution:1.3,
        friction:5,
        density:1,
        
        }
        this.body=Bodies.circle(x,y,diameter,options);
        this.diameter= diameter;
        
        World.add(world,this.body);

       
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue"); 
        strokeWeight(4);
        stroke("black");
        ellipseMode(CENTER);
        ellipse(0,0,this.diameter);
    

        pop();
    }
}