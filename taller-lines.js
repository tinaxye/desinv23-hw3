createCanvas(300, 300);
var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;
for (var i = 0; startX <= 300; i = i + 2) {
  line(startX, startY, endX, endY);
  startX += 8;
  endX += 8;
  endY += 8;
  
}
