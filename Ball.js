class Ball{
    constructor(x,y,r){
    var options={

        'restitution' : 0.95
    }
    this.body = Bodies.circle(x,y,r)
    this.r = r
    World.add(world,this.body)
    }

    show(){

        var pos = this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r)

    }
}
