const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground,stand1,stand2,slingshot,polygon_img

function preload() {
  polygon_img = loadImage("polygon.png")
}

function setup(){
     createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    ground=new Ground()
    stand1=new Stand(380,300,270,10);
    stand2=new Stand(700,200,200,10);
    //first block
    block1=new Block(280,275,30,40);
    block2=new Block(310,275,30,40);
    block3=new Block(340,275,30,40);
    block4=new Block(370,275,30,40);
    block5=new Block(400,275,30,40);
    block6=new Block(430,275,30,40);
    block7=new Block(460,275,30,40);
    block8=new Block(490,275,30,40);
    
    block9=new Block(310,235,30,40);
    block10=new Block(340,235,30,40);
    block11=new Block(370,235,30,40);
    block12=new Block(400,235,30,40);
    block13=new Block(430,235,30,40);
    block14=new Block(460,235,30,40);

    block15=new Block(340,195,30,40);
    block16=new Block(370,195,30,40);
    block17=new Block(400,195,30,40);
    block18=new Block(430,195,30,40);

    block19=new Block(370,155,30,40);
    block20=new Block(400,155,30,40);

    block21=new Block(385,115,30,40);

    //second block
    block22=new Block(640,175,30,40);
    block23=new Block(670,175,30,40);
    block24=new Block(700,175,30,40);
    block25=new Block(730,175,30,40);
    block26=new Block(760,175,30,40);

    block27=new Block(670,135,30,40);
    block28=new Block(700,135,30,40);
    block29=new Block(730,135,30,40);

    block30=new Block(700,95,30,40);

    ball=Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot=new SlingShot(this.ball,{x:100,y:200})//constant proferty


}
function draw(){
  background(56,44,44)
  stand1.display();
  stand2.display();
  
  ground.display();
  
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
slingshot.display();
imageMode(CENTER)
image(polygon_img,ball.position.x,ball.position.y,40,40)



}
function mouseDragged(){
   Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY}); 
  } 
   function mouseReleased(){
   slingshot.fly(); 
  }

