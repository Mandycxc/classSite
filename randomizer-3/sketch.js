
let dogs = [{
  name: "dilion",
  color: "dog treat"
}, {
  name: "Ziggy",
  color: "chartrese"
}, {
  name: "mercedes",
  color: "poop"
}, {
  name: "petunia",
  color: "rose gold"
}, {
  name: "kloot",
  color: "coffee grind brown"
}, {
  name: "nala",
  color: "stardust"
}]

let randomIndex;
let animating = true;

function setup(){
	createCanvas(600, 600);
	background(200);
  textSize(32);

text("click to randomize", 50, 50);



}
function draw(){

if(animating == true){
  ellipse(random(width),random(height), random(50,200));
}
}
function randomizer(){
    if (dogs[0]){
    background(random(200,255));
    randomIndex = int(random(dogs.length));
   text(dogs[randomIndex].name, 50, 50);
  dogs.splice(randomIndex, 1);
  }else{
    background(random(200,255));
    text("nothing left!", 50, 50);
  }
}
function mousePressed(){

setTimeout(randomizer,2000);




}
