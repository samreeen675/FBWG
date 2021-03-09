






function preload() {
  pic1 = loadImage("blueWater.PNG")
  pic2 = loadImage("bgH.png")
  pic3 = loadImage("download1.png")
  pic4 = loadImage("watergirl.png")
  pic5 = loadImage("redFire.PNG")
  pic6=loadImage("ground1.PNG")
  pic7=loadImage("ground2.PNG")
  pic8=loadImage("groundH.PNG")
  blueD = loadImage("blueDoor.PNG")
  redD = loadImage("redDoor.PNG")
  greenGround = loadImage("groundHGreen.PNG")
  slantGround = loadImage("groundSlant.png")
  finalGround = loadImage("finalGround.png")
  groundCorner = loadImage("groundCorner.png")
  fire = loadImage("fire.png")
  green = loadImage("green.png")
  water = loadImage("water.png")
  goldenButton= loadImage("goldenButton.PNG")
  yellowBar = loadImage("yellowBar.PNG")
  grassImg = loadImage("grass.png")
  blueDmd = loadImage("blueDiamond.png")
  redDmd = loadImage("redDiamond.png")
  climberImg = loadImage("climber.png")


}

function setup() {
  time=60
  canvas = createCanvas(1600, 1200);
  fireboy = createSprite(600, 1100)
  fireboy.addImage(pic3)
  fireboy.scale = 0.4
  watergirl = createSprite(300, 900)
  watergirl.addImage(pic4)
  watergirl.scale = 0.7

  blueDoor = createSprite(420,520)
  blueDoor.addImage(blueD)
  blueDoor.scale= 2.2

  redDoor = createSprite(880,520)
  redDoor.addImage(redD)
  redDoor.scale= 2.2



  dummy1 = createSprite(650,1160,200,10)
  // finalGround1 = createSprite()

  f1 = createSprite(200, 800)
  f1.addImage(finalGround)
  f1.scale=2


  f2 = createSprite(1380, 800)
  f2.addImage(pic5)
  f2.scale=2

  f5 = createSprite(935, 440)
  f5.addImage(pic5)
  f5.scale=1.5

  f6 = createSprite(650, 300)
  f6.addImage(pic1)
  f6.scale=1.5

  f4 = createSprite(800, 400)
  f4.addImage(pic7)
  f4.scale=1.8

  f9 = createSprite(500,440)
  f9.addImage(pic8)
  f9.scale=1.9

  f10 = createSprite(840  , 860)
  f10.addImage(finalGround)
  f10.scale=2.0
  

  f11 = createSprite(200,1000)
  f11.addImage(finalGround)
  f11.scale=2.5

  f12 = createSprite(300,1180)
  f12.addImage(finalGround)
  f12.scale=2.5

  f15= createSprite(650,1180)
  f15.addImage(fire)
  f15.scale=3

  f13 = createSprite(1100,1180)
  f13.addImage(finalGround)
  f13.scale=2.5

  f7 = createSprite(350, 380)
  f7.addImage(pic7)
  f7.scale=1.8
  
 

  f8 = createSprite(1250, 380)
  f8.addImage(pic7)
  f8.scale=1.8

  f3 = createSprite(800, 600)
  f3.addImage(pic6)
  f3.scale=2.4

  f14 = createSprite(520,835)
  f14.addImage(slantGround)
  f14.scale=1.8
  // f14.debug=true
  f14.setCollider("circle",0,0,20)


  f16 = createSprite(1500, 1110)
  f16.addImage(groundCorner)
  f16.scale=2.5

  f17 = createSprite(100  , 300)
  f17.addImage(finalGround)
  f17.scale=1

  f18 = createSprite(1500  , 300)
  f18.addImage(finalGround)
  f18.scale=1
 
  yellowBtn=createSprite(1000,1150)
  yellowBtn.addImage(goldenButton)
  yellowBtn.scale=2.5

  yellowBarSprite = createSprite(800,1000)
  yellowBarSprite.addImage(yellowBar)
  yellowBarSprite.scale = 2;

  d1 = createSprite(650,1050)
  d1.addImage(redDmd)
  d1.scale=2

  d2 = createSprite(1460,930)
  d2.addImage(redDmd)
  d2.scale=2

  d3 = createSprite(1350,700)
  d3.addImage(redDmd)
  d3.scale=2

  d4 = createSprite(900,354)
  d4.addImage(redDmd)
  d4.scale=2

  d5 = createSprite(80,208)
  d5.addImage(redDmd)
  d5.scale=2

  d6 = createSprite(710,512)
  d6.addImage(redDmd)
  d6.scale=2

  d7 = createSprite(46,1080)
  d7.addImage(redDmd)
  d7.scale=2

  d8 = createSprite(1246,62)
  d8.addImage(redDmd)
  d8.scale=2

  d9 = createSprite(350,76)
  d9.addImage(blueDmd)
  d9.scale=2

  d10 = createSprite(1300,1074)
  d10.addImage(blueDmd)
  d10.scale=2

  d11 = createSprite(622,744)
  d11.addImage(blueDmd)
  d11.scale=2

  d12 = createSprite(638,224)
  d12.addImage(blueDmd)
  d12.scale=2

  d13 = createSprite(1480,208)
  d13.addImage(blueDmd)
  d13.scale=2

  d14 = createSprite(1162,508)
  d14.addImage(blueDmd)
  d14.scale=2

  d15 = createSprite(250,480)
  d15.addImage(blueDmd)
  d15.scale=2

  d16 = createSprite(50,880)
  d16.addImage(blueDmd)
  d16.scale=2
  
 
  // f6 = createSprite(700, 600)
  // f6.addImage(pic1)
  // f7 = createSprite(1200, 600)
  // f7.addImage(pic1)
  // f8 = createSprite(200, 900)
  // f8.addImage(pic1)
  // f9 = createSprite(700, 900)
  // f9.addImage(pic1)
  // f10 = createSprite(1200, 900)
  // f10.addImage(pic1)
  // f11 = createSprite(200, 1150)
  // f11.addImage(pic1)
  // f12 = createSprite(700, 1150)
  // f12.addImage(pic1)
  // f13 = createSprite(1150, 1150)
  // f13.addImage(pic1)


}


function draw() {
  background(pic2)
  if(watergirl.isTouching(dummy1)){
    watergirl.destroy()
  }
  drawSprites()
  if (keyDown(UP_ARROW)) {
    fireboy.velocityY = -10
  }
  fireboy.velocityY += 0.5
  if (keyDown(RIGHT_ARROW)) {
    fireboy.x = fireboy.x + 5
  }
  if (keyDown(LEFT_ARROW)) {
    fireboy.x = fireboy.x - 5
  }
  fireboy.collide(f1)
  fireboy.collide(f2)
  fireboy.collide(f3)
  fireboy.collide(f4)
  fireboy.collide(f5)
  fireboy.collide(f6)
  fireboy.collide(f7)
  fireboy.collide(f8)
  fireboy.collide(f9)
  fireboy.collide(f10)
  fireboy.collide(f11)
  fireboy.collide(f12)
  fireboy.collide(f13)
  fireboy.collide(f14)
  fireboy.collide(f15)
  fireboy.collide(f16)
  fireboy.collide(yellowBarSprite)

  if (keyDown("W")) {
    watergirl.velocityY = -10
  }
  watergirl.velocityY += 0.5
  if (keyDown("D")) {
    watergirl.x = watergirl.x + 5
  }
  if (keyDown("A")) {
    watergirl.x = watergirl.x - 5
  }
  watergirl.collide(f1)
  watergirl.collide(f2)
  watergirl.collide(f3)
  watergirl.collide(f4)
  watergirl.collide(f5)
  watergirl.collide(f6)
  watergirl.collide(f7)
  watergirl.collide(f8)
  watergirl.collide(f9)
  watergirl.collide(f10)
  watergirl.collide(f11)
  watergirl.collide(f12)
  watergirl.collide(f13)
  watergirl.collide(f14)
  watergirl.collide(f15)
  watergirl.collide(f16)
  watergirl.collide(yellowBarSprite)


  if(fireboy.isTouching(yellowBtn)){
    if(yellowBarSprite.x>=600)
    yellowBarSprite.x = yellowBarSprite.x - 2
   
  }
  if(frameCount%40===0){
    time--;
  }
  fill(0)
  textSize(70)
  // text(mouseX + " " + mouseY, mouseX, mouseY)
  text("00 : "+time,690,80)


  image(grassImg,580,540,200,100)
  image(grassImg,1100,540,200,100)
  image(grassImg,690,600,200,100)
  image(climberImg,610,1,380,200)
}











