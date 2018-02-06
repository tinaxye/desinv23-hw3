function tinaPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 300, 300);
  
  colorMode(HSB);
  stroke(random(255), random(255), random(255));
  //line(x, y, x+300, y+300);
  //line(x, y+300, x+300, y);
  var count = 0;
  while(count <= 150) {
    stroke(random(255), random(255), random(255));
    rect(x+count, y+count, x+count, y+count);
    count = count + 10;
  }
  count = 0;
  while(count <= 300) {
    stroke(random(255), random(255), random(255));
    rect(x+count, y+count, x-count, y-count);
    count = count + 10;
  }
	count = 0;
  while(count <= 300) {
    stroke(random(255), random(255), random(255));
    line(x, y, x+300, y+count);
    count = count + 10;
    
  }
  count = 0;
  while(count <= 300) {
    stroke(random(255), random(255), random(255));
    line(x, y, x+count, y+300);
    count = count + 10;
    
  }
  count = 0;
}

background(255);
tinaPatch(0, 0); // draw patch at upper-left

background(255);
tinaPatch(width-301, height-301); // draw patch at lower-right
