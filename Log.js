class Log extends BaseClass{
    constructor(x, y, height, angle){
      super(x,y,20,height,angle);
this.width=20
Matter.Body.setAngle(this.body,angle);
this.image=loadImage('sprites/wood2.png');

    } 
  }