function setup() {
  createCanvas(1600, 900);
}

function draw() {
  background(220);
  
  let circX = mouseX;
  let circY = mouseY;
  let mil = millis();
  timelimit = 25;
  
  //wall variables
  i1= createDiv("");
  i2 = createDiv("");
  i3 = createDiv("");
  i4 = createDiv("");
  i5 = createDiv("");
  i6 = createDiv("");
  
  c = createDiv("");
  
  
  i1.position(580,80);
  i1.size(440,50);
  
  i2.position(1020,80);
  i2.size(440,50);
  
  i3.position(1020,0);
  i3.size(580,900);
  
  i4.position(450,640);
  i4.size(800,260);
  
  i5.position(450,240);
  i5.size(130,450);
  
  i6.position(450,240);
  i6.size(450,70);
  
  c.position(970,540);
  c.size(50,80);
  
  i1.mouseOver(tryagain);
  i2.mouseOver(tryagain);
  i3.mouseOver(tryagain);
  i4.mouseOver(tryagain);
  i5.mouseOver(tryagain);
  i6.mouseOver(tryagain);
  
  c.mouseOver(goodjob);
  
  
  
  //horizontal walls pt1
  
  fill(20,140,140);
  rect(580,130,420,20);
  
  //placeholderbarriers
  
  fill(30,30,30);
  rect(580,80,440,50);
  i1.position(580,80);
  i1.size(440,50);
  
  fill(90,90,90);
  rect(1020,80,50,700);
  i2.position(1020,80);
  i2.size(50,700);
  
  fill(120,120,120);
  rect(450,640,800,80);
  i3.position(450,640);
  i3.size(800,80);
  
  fill(150,150,150);
  rect(510,240,70,450);
  i4.position(510,240);
  i4.size(70,450);
  
  fill(180,180,180);
  rect(450,240,450,70);
  i5.position(450,240);
  i5.size(450,240);
  
  fill(210,210,210);
  rect(695,410,350,110);
  
//starting point
 
 //wall
  
  fill(20,140,140);
  rect(580,220,320,20);


  
  //vertical walls
  
  fill(20,140,140);
  rect(1000,130,20,290);
  
  
  fill(20,140,140);
  rect(900,220,20,80);
  
//horizontal walls pt2
  
  fill(20,140,140);
  rect(600,300,320,20);

  
  fill(20,140,140);
  rect(690,400,310,20);

  
  
  
  //vertical walls pt2
  
  fill(20,140,140);
  rect(580,300,20,340);

  
  fill(20,140,140);
  rect(690,420,20,100);


  
  
  //walls pt3
  fill(20,140,140);
  rect(690,520,330,20);

  
  fill(20,140,140);
  rect(600,620,420,20);

  
  fill(20,140,140);
  rect(1020,520,20,120);

  
  
  //finish line
  fill(200,140,170);
  rect(970,540,50,80);
  c.position(970,540);
  c.size(50,80);
  
  //mouse
  fill(255,20,30);
  mouse = ellipse(circX,circY,50,50);
  
  //timer
    totaltime = int(mil/1000);
  
    gametime = timelimit-totaltime;
  
     fill(255);
     stroke(0);
     textSize(24);
     text('Timer:'+gametime ,130,30);
     
   
///conclusionofgame
  
  d = int(dist(circX, circY, 330, 300));
  
//tryagain

function tryagain(){
  fill(255);
  stroke(0);
  textSize(54);
  text('Haha Loser!',1000,80);
}
  
function goodjob(){
  fill(255);
  stroke(0);
  textSize(54);
  text('LESGOOOOO',1000,80);
}
  
  
  
}
