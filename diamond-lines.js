createCanvas(300, 300);
var startX = 150;
var startY = 0;
var endX = 150;
var endY = 0;
for (var i = 0; startY <= 150; i = i + 2) {
  startX -= 8;
  startY += 10;
  endX += 8;
  endY += 10;
  line(startX, startY, endX, endY);
}
for (var i = 0; startY <= 310; i = i + 2) {
  startX += 8;
  startY += 10;
  endX -= 8;
  endY += 10;
  line(startX, startY, endX, endY);
}
