class Particles{
    constructor(x,y,radius){
        var options = {
            isStatic : false
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.color = color(random(0,255))
        this.radius = radius
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill(this.color)
        ellipse(pos.x,pos.y,this.radius)
    }
    }
    