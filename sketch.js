var myTextblock, myFont;
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  
}

function preload(){
  myTextblock = loadStrings("GameStart.txt")
  myFont = loadFont("PublicPixel-z84yD.ttf")
}

function draw(){
 background(220);
 translate(-width/2,-height/2,0);
 strokeWeight(10);
 line(100,0, 100, windowHeight);
 line(150,0, 150, windowHeight);
 line(200,0, 200, windowHeight); 
 line(250,0, 250, windowHeight);


  strokeWeight(2);
  //first box
  translate(width/2, height/2);
  rotate(PI/4);
  //second box
  box(175,175, 5);
  translate(width/675,height/6.25);
  box(175,175, 5);  
  //third box
  translate(width/7.25,-height/6.25);
  box(175,175, 5);

  textSize(32);
  textLeading(40);
  
  textFont("myFont");
  text(myTextblock, 100, 100, 600, windowHeight);
  
 


}