class Paper{
    constructor(x,y){
        var options={
            'isStatic':false,
            'density':1.2,
            'restitution':0.3,
            'friction':0.5,
        }
        this.body = Bodies.circle(x,y,10,options);
        console.log("HI!");
        this.diameter=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER)
        fill('white');
        ellipse(0,0,this.diameter,this.diameter)
        pop();
    }
}
