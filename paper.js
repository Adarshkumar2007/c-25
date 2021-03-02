class Paper {
    constructor(x,y){
var options={
    isStatic:  false,
    'restitution' : 0.3,
    'friction' : 0.5 ,
    'density' : 1.2 
}
this.image = loadImage(paper.png); 
    }
    display() {
        
           if (keyDown("LEFT_ARROW")) {
            paper.velocityX=-4;
            paper.velocityY=0;
          }
          
           if (keyDown("RIGHT_ARROW")) {
            paper.velocityX=4;
            paper.velocityY=0;
          }
      display();
    }
  }
  






