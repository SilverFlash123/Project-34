class Box{
    constructor(x,y,width,height){
        var options={
            'density':20,
            'restitution':0.8,
            'friction':1.0,       
        }

        this.width=width;
        this.height=height;
       
        
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)



    } 
    display(){
        var boxpos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(boxpos.x,boxpos.y)
        rectMode(CENTER)
        fill("red")
       rect(0,0,this.width,this.height)
        
        pop()
    }
}