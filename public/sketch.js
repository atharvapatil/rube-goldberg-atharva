//Prevent page scrolling
document.ontouchmove = function(event){
  event.preventDefault();
}

let cnv;
let buttonPressed = false;

let urlOn;
let urlOff;
let hostName = "staging.vidia.site";

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
  background(100);
  noStroke();

  if(buttonPressed == true){
    fill(0, 220, 0);
  } else {
    fill(220, 0, 0);
  }

  rectMode(CENTER);
  rect(width/2, height/2, 200, 60);

}
