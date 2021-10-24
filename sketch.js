const Engine = Matter.Engine;
const Bodies = Matter.Bodies
const World = Matter.World
const Body = Matter.body;


//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body
var engine, world , ground

function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  engine = Engine.create();
world= engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
   isStatic: true
  };
  ground = Bodies.rectangle(200,380,400,10 ,ground_options)
  World.add(world,ground)
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);// by this the ground will be at the center
  ellipseMode(RADIUS);//by this the ball will at the radius
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 rect (ground.position.x , ground.position.y,400,10)


  
  
}

