const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = []
var plinkos = []
var divisions = []

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

}

function draw() {
  background("black");  

  for(var k;k<=width;k = k+80){
    divisions.push(new Divisions(k,600,10,300))
  }

  for(var j;j<=width;j = j+50){
    plinkos.push(new Plinko(j,75,10))
  }

  for(var l;l<=width;l = l+50){
    plinkos.push(new Plinko(l,175,10))
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2 +10),10,10))
  }

  for(var j = 0;j<particles.length;j++){
    particles[j].display()
  }
  for(var k = 0;k<divisions.length;k++){
    divisions[k].display()
  }
  drawSprites();
}