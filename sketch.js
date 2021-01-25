var player, pImg1, pImg2, pImg3, pImg4, pImg5 ,ground
var backg, backgImg
var obstacle, obsGroup,obsImg
var speedup, speedupGroup
var PLAY = 1;
var END = 0;
var gameState = 1
var score

function preload() {

   pImg1 = loadImage("shield.png");
   pImg2 = loadImage("medal.png");
   pImg3 = loadImage("amethyst.png");
   pImg4 = loadImage("crown.png");
   pImg5 = loadImage("diamond.png");
   backgImg = loadImage("backg.png");
   obsImg = loadImage("stone.png");

}

function setup() {
  createCanvas(800,400);

  ground = createSprite(400,395,800,20);
  ground.velocityX = -4

  backg = createSprite(400,200,800,400);
  backg.addImage(backgImg);

  obsGroup = new Group();
  speedupGroup = new Group();
  score = 0;

  player = createSprite(50, 370, 20, 20);
  //player.shapeColor = "red";
  player.addImage(pImg1);
  player.scale = 0.10;
}

function draw() {
  background(255,255,255);  

  if(gameState = 1){
   if (score < 1000){
   stroke("white");
   textSize(20);
   fill("white");
   text("Getting to 1000 is very hard. Can you do it?",20,10);
   }

  console.log(player.y)
  if (keyDown(UP_ARROW)  && player.y > 348){
     player.velocityY = - 20
  }
     player.velocityY = player.velocityY + 0.8;
     player.collide(ground);

  if (frameCount %60 === 0){
   score = score+100;
   ground.x = 400;
  }

  if (score < 2000 && score > 1000){
    stroke("white");
    textSize(20);
    fill("white");
    text("Only experts get to 2000...",20,10);
    obsGroup.setVelocityXEach(-8);
      }

  if (score < 3000 && score > 2000 ){
    stroke("white");
    textSize(20);
    fill("white");
    text("The difference between good & great is 3000",20,10);
    player.addImage(pImg2);
    obsGroup.setVelocityXEach(-10);
      }

  if (score < 4000 && score > 3000){
    stroke("white");
    textSize(20);
    fill("white");
    text("3000 is respectable. 4000 is impressive",20,10);
    player.addImage(pImg3);
    obsGroup.setVelocityXEach(-12);
        }

  if (score < 5000 && score > 4000){
    stroke("white");
    textSize(20);
    fill("white");
    text("The ultimate test is 5000. Good luck.",20,10);
    player.addImage(pImg4);
    obsGroup.setVelocityXEach(-14);
          }

  if (score > 5000){
    stroke("white");
    textSize(20);
    fill("white");
    text("You are a true professional. keep going!",20,10);
    player.addImage(pImg5);
    obsGroup.setVelocityXEach(-16);
                  }

  if (speedupGroup.isTouching(player)){
      score = score+200;
                   }   
                                    

  if (obsGroup.isTouching(player)){
      gameState = 0;
                  }   
                }  
                  
     if (gameState === 0 && score < 5000){

     ground.velocityX = 0;
     player.velocityY = 0;
     obsGroup.setVelocityXEach(0);
     obsGroup.setLifetimeEach(-1);
     stroke("white");
     textSize(20);
     fill("white");
     text("Maybe this isnt for you, but Thomas Edison took many attempts to make the lightbulb, right?",20,40);
                  }          
                  
     if (gameState = 0 && keyDown ("space")){
       gameState = 1
       score = 0;
       obsGroup.setVelocityXEach(-6);
       obsGroup.setXPostionEach(750);
     }             

  speed();   
  obs();
  drawSprites();
}

 function obs(){
    if (frameCount %100 === 0){
     obstacle = createSprite(750,370,10,30);
     //obstacle.shapeColor = "blue";
     obstacle.addImage(obsImg);
     obstacle.height = random(15,45);
     obstacle.scale = 0.25

     obstacle.velocityX = -6;
     obstacle.lifetime = 300;
    
     obsGroup.add(obstacle);

   }
 }

   function speed() {
    if (frameCount %300 === 0){
      speedup = createSprite(750,330,10,10);
      speedup.shapeColor = "blue";
      speedup.scale = 0.25
 
      speedup.velocityX = -10;
      speedup.lifetime = 300;
     
      speedupGroup.add(speedup);
 
    }
  

   }