const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;
var hexagon;
var ground;

function preload() {
    hexagon = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand=new Ground(600,height,1200,20);

    hexagon=(mouse.x,mouse.y,50,60);
    hexagon=

    block1=new Block(330,235,30,40);
    block2=new Block(360,235,30,40);
    block3=new Block(390,235,30,40);
    block5=new Block(420,235,30,40);
    block6=new Block(450,235,30,40);
    block7=new Block(360,235,30,40);

    block8=new Block(360,195,30,40);
    block9=new Block(390,195,30,40);
    block10=new Block(420,195,30,40);

    block11=new Block(390,155,30,40);
}
function draw(){
    background(225);
    Engine.update(engine);

    ground.display();
    stand.display();

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
}
