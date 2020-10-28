class Tree{
    constructor(x,y){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2            
            }
            this.x = x
            this.y = y
            this.image = loadImage("tree.png");
            this.body = Bodies.rectangle(this.x,this.y,450,10,options);
            World.add(world,this.body);
        }
        display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            image(this.image, 0, 0, 450, 600);
            pop();
        }
    }