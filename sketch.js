const Engine = Matter.Engine;  //namespacing
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,height-30);
    box2 = new Box(600,height-120);
    box3 = new Box(800,height-30);
    box4 = new Box(800,height-120);
    box5 = new Box(700,height-160);

    log1 = new Log(700,height-80,260,PI);
    log2 = new Log(700,height-157,260,PI);
    log3 = new Log(630,height-278,240,-PI/3);
    log4 = new Log(770,height-278,240,PI/3);
    
    pig1 = new Pig(700,height-30);
    pig2 = new Pig(700,height-100);

    bird = new Bird(200,500);

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    
    pig1.display();
    pig2.display();

    bird.display();

    ground.display();
}