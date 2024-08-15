function setup() {
  createCanvas(1000, 800);

}
function draw() {
 
  fill ("purple");
  stroke("yellow");
  if (mouseIsPressed)
 rect (mouseX, mouseY,50);
 }
