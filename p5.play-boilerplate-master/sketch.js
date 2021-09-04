var bow 
var arrow, arrowHead
var bg
var target,target1,target2,target3
var point

function preload(){

bowImage=loadImage("assets/images.png")
arenaImage=loadImage("assets/arena.jpg")
arrowImage=loadImage("assets/NicePng_archery-png_385791.png")
targetImage=loadImage("assets/pngwing.com.png")


}

function setup() {
  createCanvas(1500,900);
  
  bow=createSprite(200,600,10,10)
  

  bow.rotation=40
  bow.addImage(bowImage)
 
}


function draw() {
  background(arenaImage); 
  bow.y = mouseY
 
  Target();
  if(arrowHead!==undefined && target !==undefined){
    if(arrowHead.isTouching(target)){
      //what should happen now?
      //targetshougldisapre
      target.destroy()
    }
  }
    if(arrowHead!==undefined && target1 !==undefined){
      if(arrowHead.isTouching(target)){
        //what should happen now?
        //targetshougldisapre
        target1.destroy()
      }
    }
      if(arrowHead!==undefined && target2 !==undefined){
        if(arrowHead.isTouching(target)){
          //what should happen now?
          //targetshougldisapre
          target2.destroy()
        }
      }
        if(arrowHead!==undefined && target3 !==undefined){
          if(arrowHead.isTouching(target)){
            //what should happen now?
            //targetshougldisapre
            target3.destroy()
          }

  }
  drawSprites();


function keyPressed(){
  if(keyCode === 65){
    arrow=createSprite(200,bow.y,10,10)
    
    arrow.addImage(arrowImage)
   arrow.scale=.1
   arrow.rotation=46
    arrow.velocityX=10
    arrow.lifetime=200
    arrowHead=createSprite(200, bow.y, 5,5)
    arrowHead.x= arrow.x +((arrow.width/10)-27)
    arrowHead.lifetime=200
    arrowHead.invisible=false
    arrowHead.shapeColor='red'
    arrowHead.velocityX=arrow.velocityX
  }
  
}
function Target(){
  if(frameCount % 120 ===0 ){
  target=createSprite(550,10,50,50)
  target.addImage(targetImage)
  target.scale=.05
  target.lifetime=600
  target.velocityY=1
  
  
  }
  if(frameCount % 150 === 0){
  target1=createSprite(850,10,50,50)
  target1.addImage(targetImage)
  target1.scale=.05
  target1.lifetime=200
  target1.velocityY=15
  }
if(frameCount % 190 === 0){
  target3=createSprite(1150,10,50,50)
  target3.addImage(targetImage)
  target3.scale=.05
  target3.lifetime=200
  target3.velocityY=5
}
if(frameCount % 60 === 0){
  target2=createSprite(1450,10,50,50)
  target2.addImage(targetImage)
  target2.scale=.03
  target2.lifetime=200
  target2.velocityY=20
}
}
}
