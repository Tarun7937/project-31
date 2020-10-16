const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var divisionsarr = []
var particlesarr = []
var plinkoarr = []








function setup() {
  
  createCanvas(820,600);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;

for (var i = 0;i<=800;i = i+80){
divisionsarr.push( new Division(i,480))
}

for (var z = 50;z<=800;z = z+50){
  plinkoarr.push( new Plinko(z,75))
  plinkoarr.push( new Plinko(z,175))
  }
  for (var z = 0;z<=800;z = z+40){
    plinkoarr.push( new Plinko(z,125))
    plinkoarr.push( new Plinko(z,225))
    }

  
  
 
 ground = new Ground(400,600,800,20)



}

function draw() {
  background(0);  
 
  Engine.update(engine);
  for (var i = 0;i<divisionsarr.length;i = i+1){
    divisionsarr[i].display();
    }
 if(frameCount%60===0){
   

  particlesarr.push(new Particle(random(400,300,),10,10))




 }
    for (var z = 0;z<particlesarr.length;z++){
      particlesarr[z].display();

    }
    for (var i = 0;i<plinkoarr.length;i++){
      plinkoarr[i].display();

    }
    for (var i = 0;i<plinkoarr.length;i++){
      plinkoarr[i].display();

    }
     
ground.display();



  drawSprites();
}