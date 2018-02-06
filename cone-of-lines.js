createCanvas(300, 300);
for (var i = 0; i <= 300; i = i + 10) {
  var startX = 150;
  var startY = 0;
  var endX = i;
  var endY = 300;
  line(startX, startY, endX, endY);
}
