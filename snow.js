class snow{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,50,50);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("snow4.webp");
        

        this.lifetime = 100;
        World.add(world, this.body);
      }

      changePosition()
      {
        if(this.body.position.y > height)
        {
        Matter.Body.setPosition(this.body,{x:random(0,1400),y:random(0,50)});
        }
      }

      display() 
      {
        
        push();
      
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        
      }








}