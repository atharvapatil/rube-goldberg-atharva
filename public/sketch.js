//Prevent page scrolling
document.ontouchmove = function(event){
  event.preventDefault();
}

let cnv;
let buttonPressed = false;

let urlOn;
let urlOff;
let hostName = "staging.vidia.site";

let bg;
let banana;
let flipBanana;

function preload(){
  bg = loadImage('/images/nyc-bg.png');
  banana = loadImage('/images/banana.png');
  flipBanana = loadImage('/images/banana-flip.png');
}


function urlOnSetup(){
  urlOn = "https://" + hostName + "/device-1" + "/on" ;
}

function urlOffSetup(){
  urlOff = "https://" + hostName + "/device-1" + "/off"
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  urlOnSetup();
  urlOffSetup();
}

function touchStarted(){
  buttonPressed = true;

  console.log("touch success")

  if(buttonPressed == true && mouseX <= 50 && mouseY <= 50){
    turnOffRequest();
  } else if (buttonPressed == true && mouseX > 50 && mouseY > 50) {
    turnOnRequest();
  }
}

function touchEnded(){
  buttonPressed = false;
}

function turnOnRequest(){
  httpPost(urlOn, turnedOn, failureMessage)
}

function turnOffRequest(){
  httpPost(urlOff, turnedOff, failureMessage)
}

function turnedOff(){
  console.log("humidifier off");
}

function turnedOn(){
  console.log("humidifier on");
}

function failureMessage(){
  console.log("POST error")
}

function draw() {
  background(255);
  noStroke();

  image(bg,0,390,980,245);
  image(banana,width/2 + 140, height/2 - 64, 80, 112);
  image(flipBanana,width/2 - 220, height/2 - 64, 80, 112);

  if(buttonPressed == true){
    fill(251,192,45);
  } else {
    fill(255,214,0);
  }

  rectMode(CENTER);
  rect(width/2, height/2 - 10, 240, 80);

  fill(40);
  textAlign(CENTER);
  textSize(36);
  textFont('Lato');
  textStyle(BOLD);
  text('"Banana me"', width/2, height/2);


  textDraw();

}

function textDraw(){
  //ITP NYU text
  fill(38,50,56);
  textAlign(CENTER);
  textSize(88);
  textFont('Concert One');
  text('ITP NYU', width/2, 100);

  // RUBE GOLDBERG TEXT
  fill(55,71,79);
  textSize(64);
  textFont('Concert One');
  text('Rube Goldberg Machine', width/2, 170);
}
