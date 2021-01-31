class Log {
    constructor(x, y,width,angle) {
      var options = {
         //'isStatic':true,
          'friction':0.8,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width,20, options);
      this.width = width;
      this.height = 20;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var ang = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(ang);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  