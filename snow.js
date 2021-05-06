class Snow {
    constructor(x,y) {
      var options = {
        friction:0.3
      }
      this.body = Bodies.rectangle(x,y,20,20,options);
      this.width = 20;
      this.height = 20;
      this.image=loadImage("snow4.webp")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
