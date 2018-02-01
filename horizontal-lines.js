createCanvas(250, 250);
for (var i = 20; i <= 230; i = i + 10) {
  var startX = 20;
  var startY = i;
  var endX = 480;
  var endY = i;
  line(startX, startY, endX, endY);
}
