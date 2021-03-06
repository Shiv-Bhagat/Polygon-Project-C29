const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(200,690,2000,20)
holder1 = new Ground(970,240,300,10)
holder2 = new Ground(650,440,300,10)
ball = new Ball(150,400,24)
slingshot = new SlingShot(ball.body,{x:150,y:400})
//Holder1
block1=new Block(650,220,40,40,PI/2)
block2=new Block(610,200,40,40)
block3=new Block(570,180,40,40)
block4=new Block(530,160,40,40)
block5=new Block(690,140,40,40)
block6=new Block(730,120,40,40)
block7=new Block(770,110,40,40)
block8=new Block(570,180,40,40)
block9=new Block(610,200,40,40)
block10 = new Block(650,220,40,40)
block11 = new Block(690,140,40,40)
block12 = new Block(730,120,40,40)
block13 = new Block(650,220,40,40)
block14 = new Block(610,200,40,40)
block15 = new Block(690,140,40,40)
//Holder2
block16 = new Block(970,40,40,40)
block17=new Block(970,40,40,40)
block18=new Block(930,20,40,40)
block19=new Block(890,0,40,40)
block20=new Block(850,20,40,40)
block21=new Block(1010,40,40,40)
block22=new Block(1050,60,40,40)
block23=new Block(1090,80,40,40)
block24=new Block(890,0,40,40)
block25=new Block(930,20,40,40)
block26 = new Block(650,220,40,40)
block27 = new Block(1010,40,40,40)
block28 = new Block(1050,60,40,40)
block29 = new Block(970,40,40,40)
block30 = new Block(970,40,40,40)
block31 = new Block(930,20,40,40)
block32 = new Block(1010,40,40,40)



  Engine.run(engine);
  


}
function draw() {
  background(0,255,255); 
  ground.display();
  holder1.display();
  holder2.display();
  ball.display();
  slingshot.display();
  //Holder1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  //Holder2
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  
  

}
function keyPressed(){
	if (keyCode===32){
		slingshot.attach(ball.body)
	}
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}