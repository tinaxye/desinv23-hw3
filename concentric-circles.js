createCanvas(250, 250);
for (var i = 5; i <= 200; i = i + 10) {
  var startX = 125;
  var startY = 125;
  var w = 480;
  var h = i;
  ellipse(startX, startY, w, h);
}
