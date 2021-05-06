const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var snow=[]
var engine,world,bg


function preload(){
  bg=loadImage("snow1.jpg")
}
function setup() {
engine=Engine.create();
world=engine.world
  createCanvas(800,400);

}

function draw() {
  background(bg);
  Engine.update(engine) 
  if(frameCount%10===0){
    snow.push(new Snow(random(0,800),0))
  }
  for(var i=0;i<snow.length;i++){
    snow[i].display();
  }
  drawSprites();
}