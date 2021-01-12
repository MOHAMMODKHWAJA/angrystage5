class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed<3){    //true
    super.display();
    }
    else   //true  speed is greate than 3
    {
      //do nothing
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;     //1st call 255-5=250 2nd call 250-5=245 3rd call 245-5=240 
  tint (255,this.visibility);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
  pop();
    }


  }

};