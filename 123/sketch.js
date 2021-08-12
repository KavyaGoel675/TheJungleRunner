var background1,background2;
var base;
var player;
var platform1,platform2,platform3,platform4,platform5,platform6,platform7;

var b1,b2;
var heading;
var play;
var instruction;
var inst;
var next;
var coin1,coin2,coin3;
var coinGroup;
var reset,gameOver;
var gameState=0;
var score=0;
function preload(){

background1Img=loadImage("background/1.png");
background2Img=loadImage("background/2.png");
baseImg=loadImage("base.png");
playerImg=loadImage("player/1.png");

p1Img=loadImage("platform/1.png");
p2Img=loadImage("platform/2.png");
p3Img=loadImage("platform/3.png");
p4Img=loadImage("platform/4.png");
p5Img=loadImage("platform/5.png"); 
p6Img=loadImage("platform/6.png");

headingImg=loadImage("heading.png");
playImg=loadImage("play.png");
instImg=loadImage("instruction.png");
instimg=loadImage("inst.png");
nextImg=loadImage("next.png");

coinImg=loadImage("coin.png");

goImg=loadImage("gameOver.png");
resetImg=loadImage("reset.png")

winImg=loadImage("win.png")
}



function setup(){

createCanvas(800,400);
heading=createSprite(400,80);
heading.addImage(headingImg);

play=createSprite(400,240);
play.addImage(playImg);

instruction=createSprite(400,300);
instruction.addImage(instImg);

inst=createSprite(400,160);
inst.addImage(instimg);
inst.scale=0.5;
inst.visible=false;

next=createSprite(700,350);
next.addImage(nextImg);
next.scale=0.6;
next.visible=false;

//gameState 1 objects

background1=createSprite(400, 200, 50, 50);
background1.addImage("img",background2Img);
background1.scale=0.6;

base=createSprite(210, 370);
base.addImage("img",baseImg);
base.scale=1.6;

player=createSprite(100,245);
player.addImage(playerImg);
player.scale=1.9;

platform1=createSprite(560,370);
platform1.addImage(p1Img);
platform1.scale=0.75;

platform2=createSprite(710,260);
platform2.addImage(p3Img);
platform2.scale=0.75;

platform3=createSprite(830,180);
platform3.addImage(p4Img);
platform3.scale=0.75;

platform4=createSprite(1200,280);
platform4.addImage(p4Img);
platform4.scale=0.75;

platform5=createSprite(1380,280);
platform5.addImage(p4Img);
platform5.scale=0.75;

platform6=createSprite(1560,280);
platform6.addImage(p4Img);
platform6.scale=0.75;

b1=createSprite(782,180,20,20);
b1.visible=false;

b2=createSprite(1082,180,20,20);
b2.visible=false;

coin1=createSprite(900,80,10,10);
coin1.addImage(coinImg);
coin1.scale=0.1;
coin1.visible=false;
coin2=createSprite(1290,200,10,10);
coin2.addImage(coinImg);
coin2.scale=0.1;
coin2.visible=false;
coin3=createSprite(1390,200,10,10);
coin3.addImage(coinImg);
coin3.scale=0.1;
coin3.visible=false;
coinGroup=new Group()


}



function draw(){
background(background1Img);


if(gameState === 0){
  //hiding gameState 1 objects
background1.visible=false;
base.visible=false;
player.visible=false;
platform1.visible=false;
platform2.visible=false;
platform3.visible=false;
platform4.visible=false;
platform5.visible=false;
platform6.visible=false;

//play button
if(mousePressedOver(play)){
  mousePress();
  gameState=1
}
// instruction button


}


if(mousePressedOver(instruction)){
  mousePress();
  instructions();
  
}
if(mousePressedOver(next)){
  next.visible=false;
  inst.visible=false;
  gameState=1;

}

else if(gameState===1){
  //making all of them visible;
  background1.visible=true;
  base.visible=true;
  player.visible=true;
  platform1.visible=true;
  platform2.visible=true;
  platform3.visible=true;
  platform4.visible=true;
  platform5.visible=true;
  platform6.visible=true;
  coin1.visible=true;
  coin2.visible=true;
  coin3.visible=true;


  textSize(20);
  fill(0);
 text("Score: "+score,30,30);
  //movements
  movement();
  //spawnCoin();
  coinGroup.add(coin1);
  coinGroup.add(coin2);
  coinGroup.add(coin3);

  if(coinGroup.isTouching(player)){
      score=score+1;
      coinGroup[0].destroy();
  }

  if(score==3){
    text("You Won",360,390);
    background1.visible=false;
base.visible=false;
player.visible=false;
platform1.visible=false;
platform2.visible=false;
platform3.visible=false;
platform4.visible=false;
platform5.visible=false;
platform6.visible=false;
var win=createSprite(400,200);
win.addImage(winImg);
win.scale=0.2;
  }
  if(player.y<400){

  }
  
}
   drawSprites();
}

function movement(){
  if(keyIsDown(RIGHT_ARROW)){
    player.x=player.x+1;
    base.x=base.x-1;
    platform1.x=platform1.x-1;
    platform2.x=platform2.x-1;
    platform3.x=platform3.x-1;
    platform4.x=platform4.x-1;
    platform5.x=platform5.x-1;
    platform6.x=platform6.x-1;

    b1.x=b1.x-1;
    b2.x=b2.x-1;

    coin1.x=coin1.x-1;
    coin2.x=coin2.x-1;
    coin3.x=coin3.x-1;
  }

  if(keyIsDown(LEFT_ARROW)){
    player.x=player.x-1;
    base.x=base.x+1;
    platform1.x=platform1.x+1;
    platform2.x=platform2.x+1;
    platform3.x=platform3.x+1;
    platform4.x=platform4.x+1;
    platform5.x=platform5.x+1;
    platform6.x=platform6.x+1;
    b1.x=b1.x+1;
    b2.x=b2.x+1;

    coin1.x=coin1.x+1;
    coin2.x=coin2.x+1;
    coin3.x=coin3.x+1;
  }

  if(keyDown("space")) {
    player.velocityY = -12;
}

player.velocityY = player.velocityY + 0.8;

player.collide(base);
player.collide(platform1);
player.collide(platform2);
player.collide(platform4);
player.collide(platform5);
player.collide(platform6);
player.setCollider("rectangle",-20,20,40,50);


createEdgeSprites();
if(platform3.bounceOff(b1)){
  platform3.velocityX=1;
  

}

if(platform3.bounceOff(b2)){
  platform3.velocityX=-2;
}

if(player.collide(platform3) ){
  player.x=platform3.x;
    base.x=base.x-2;
    platform1.x=platform1.x-2;
    platform2.x=platform2.x-2;
    platform3.x=platform3.x-2;
    platform4.x=platform4.x-3;
    platform5.x=platform5.x-3;
    platform6.x=platform6.x-3;

    b1.x=b1.x-2;
    b2.x=b2.x-2;

    coin1.x=coin1.x-2;
    coin2.x=coin2.x-2;
  

}
}


function mousePress(){
  heading.visible=false;
  play.visible=false;
  instruction.visible=false;
}

function instructions(){
  inst.visible=true;
  next.visible=true;
}

function spawnCoin(){
  if(frameCount%200===0){
    var coin=createSprite(800,150,20,20);
    coin.y=Math.round(random(70,150));
    coin.addImage(coinImg);
    coin.scale=0.1;
    coin.velocityX=-1;
    

    coinGroup.add(coin);
  }
  
}