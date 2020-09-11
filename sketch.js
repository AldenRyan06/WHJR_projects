//Alden Ryan
var bg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var OSound;
var CSound;
var Jsound;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, birdGroup;

var score;

var gameOverImg,restartImg


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  bird_flying = loadAnimation("bird.png","bird2.png");
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
   restartImg = loadImage("restart.png")
  gameOverImg = loadImage("gameOver.png")
  
  OSound = loadSound("die.mp3");
  JSound = loadSound("jump.mp3");
  CSound = loadSound("checkPoint.mp3")
}

function setup() {
  createCanvas(600, 200);
  bg = createSprite(300,150,600,400);
  bg.shapeColor = "black"
  bg.visible = false;
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided" ,trex_collided);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
   gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();
  birdGroup = createGroup()
  
  console.log("Hello" + 5);
  
  trex.setCollider("circle",0,0,40);

  
  score = 0;
  
}

function draw() {
  
  background("white");
  //displaying score
  text("Score: "+ score, 500,50);
  
  console.log("this is ",gameState)
  
   if(score===1000){
     bg.visible = true;
     
   }
   if(score===2000){
     bg.visible = false;
     
   }
   if(score===3000){
     bg.visible = true;
     
   }
   if(score===4000){
     bg.visible = false;
     
   }
   if(score===5000){
     bg.visible = true;
     
   }
   if(score===6000){
     bg.visible = false;
     
   }
   if(score===7000){
     bg.visible = true;
     
   }
   if(score===8000){
     bg.visible = false;
     
   }
   if(score===9000){
     bg.visible = true;
     
   }
   if(score===10000){
     bg.visible = false;
     
   }
  if(score===11000){
     bg.visible = true;
     
   }
   if(score===12000){
     bg.visible = false;
     
   }
   if(score===13000){
     bg.visible = true;
     
   }
   if(score===14000){
     bg.visible = false;
     
   } if(score===15000){
     bg.visible = true;
     
   }
   if(score===16000){
     bg.visible = false;
     
   } if(score===17000){
     bg.visible = true;
     
   }
   if(score===18000){
     bg.visible = false;
     
   } if(score===19000){
     bg.visible = true;
     
   }
   if(score===20000){
     bg.visible = false;
     
   } if(score===21000){
     bg.visible = true;
     
   }
   if(score===22000){
     bg.visible = false;
     
   } if(score===23000){
     bg.visible = true;
     
   }
   if(score===24000){
     bg.visible = false;
     
   } if(score===55000){
     bg.visible = true;
     
   }
   if(score===25000){
     bg.visible = false;
     
   } if(score===26000){
     bg.visible = true;
     
   }
   if(score===27000){
     bg.visible = false;
     
   } if(score===28000){
     bg.visible = true;
     
   }
   if(score===29000){
     bg.visible = false;
     
   } if(score===30000){
     bg.visible = true;
     
   }
   if(score===31000){
     bg.visible = false;
     
   } if(score===32000){
     bg.visible = true;
     
   }
   if(score===33000){
     bg.visible = false;
     
   } if(score===34000){
     bg.visible = true;
     
   }
   if(score===35000){
     bg.visible = false;
     
   } if(score===36000){
     bg.visible = true;
     
   }
   if(score===37000){
     bg.visible = false;
     
   } if(score===38000){
     bg.visible = true;
     
   }
   if(score===39000){
     bg.visible = false;
     
   } if(score===40000){
     bg.visible = true;
     
   }
   if(score===41000){
     bg.visible = false;
     
   } if(score===42000){
     bg.visible = true;
     
   }
   if(score===43000){
     bg.visible = false;
     
   } if(score===44000){
     bg.visible = true;
     
   }
   if(score===45000){
     bg.visible = false;
     
   } if(score===46000){
     bg.visible = true;
     
   }
   if(score===47000){
     bg.visible = false;
     
   } if(score===49000){
     bg.visible = true;
     
   }
   if(score===50000){
     bg.visible = false;
     
   } if(score===51000){
     bg.visible = true;
     
   }
   if(score===52000){
     bg.visible = false;
     
   } if(score===53000){
     bg.visible = true;
     
   }
   if(score===54000){
     bg.visible = false;
     
   }
  if(gameState === PLAY){
    gameOver.visible = false
    restart.visible = false
    //move the ground
    ground.velocityX = -4;
    //scoring
    score = score + Math.round(frameCount%1 === 0);
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&& trex.y >= 130) {
        trex.velocityY = -13;
      JSound.play();
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& trex.y >= 130) {
        trex.velocityY = -12;
      JSound.play();
    }
    if (mouseIsPressed) { 
       
        if (mouseButton === LEFT&&trex.y >= 130) { 
             trex.velocityY = -12;
           JSound.play();
        } 
    } 
     if(score % 100===0 && score > 0){
      CSound.play()
    }
    
    //add gravity
    trex.velocityY = trex.velocityY + 1
  
    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles on the ground
    spawnObstacles();
    spawnBirds();
    
    if(obstaclesGroup.isTouching(trex)||birdGroup.isTouching(trex)){
        gameState = END;
      OSound.play();
      
  
    }
  }
   else if (gameState === END) {
     console.log("hey")
      gameOver.visible = true;
      restart.visible = true;
     bg.visible = false;
      ground.velocityX = 0;
      trex.velocityY = 0
    
      //change the trex animation
      trex.changeAnimation("collided", trex_collided);
     
      //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
     birdGroup.setLifetimeEach-(1);
     obstaclesGroup.setVelocityXEach(0);
     cloudsGroup.setVelocityXEach(0);
     birdGroup.setVelocityXEach(0);
     
   }
  
 
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  if (mouseIsPressed) { 
       
        if (mouseButton === LEFT&&mouseIsOver(restart)&&gameState===END) { 
             gameState=PLAY;
           obstaclesGroup.setLifetimeEach(0);
    cloudsGroup.setLifetimeEach(0);
          birdGroup.setLifetimeEach(0);
          score=0;
          trex.changeAnimation("running",trex_running);
        } 
    } 
  
  
        if (keyDown("r")&&gameState===END) { 
             gameState=PLAY;
           obstaclesGroup.setLifetimeEach(0);
    cloudsGroup.setLifetimeEach(0);
          birdGroup.setLifetimeEach(0);
          score=0;
          trex.changeAnimation("running",trex_running);
        } 
  
  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 50===0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -6;
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200 ;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //adding cloud to the group
   cloudsGroup.add(cloud);
    }
}
function spawnBirds(){
 if (frameCount % 100===0&&score>=700){
   var bird = createSprite(600,Math.round(random(60,110)),20,20);
   bird.velocityX = -8;
   
    //generate random obstacles
   
    //assign scale and lifetime to the obstacle           
    bird.scale = 0.5;
    bird.lifetime = 300;
   bird.addAnimation("flying",bird_flying);
  // bird.debug = true;
   bird.setCollider("circle",0,0,25);
   //add each obstacle to the group
    birdGroup.add(bird);
 }
}
