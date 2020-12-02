class Waste{

    constructor(x, y) {
        var options = {
            'restitution':true,
            'restitution':0.3,
            'density':0.5
        }
        this.body = Bodies.circle(x, y, 40,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("paper.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        fill("white");
        //ellipse(0,0,this.width,this.height);
        image(this.image,0,0,this.width,this.height);
        pop();
          
      }
    };  
