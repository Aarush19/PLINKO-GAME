class Paricals{
    constructor(x,y){
        var options = {

            isStatic: true
        }
        this.body = Bodies.circles(x, y,this.r, options);
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    
    }
}