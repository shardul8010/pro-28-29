const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball,engine,world,slingshot;
var box1,box2,box3,box4,box5,box6,box7;
var platform1;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(300,690);
    slingshot = new Slingshot(ball.body,{x:200,y:600})
    box1 = new Box(840,340,30,30);
    box2 = new Box(870,340,30,30);
    box3 = new Box(900,340,30,30);
    box4 = new Box(830,360,30,30);
    box5 = new Box(860,360,30,30);
    box6 = new Box(890,360,30,30);
    box7  = new Box(920,360,30,30);
    platform1 = new Platform(890,380,170,30)
}
function draw(){
    background("blue");
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    ball.display();
    platform1.display();
    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        ball.trajectory = [];
        Matter.Body.setPosition(ball.body, {x: 200 , y: 50}); 
  slingshot.attach(ball.body)}
    }