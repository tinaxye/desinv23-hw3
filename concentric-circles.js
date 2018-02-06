createCanvas(300, 300);
for (var i = 15; i <= 300; i = i + 10) {
  var startX = 150;
  var startY = 150;
  var w = i;
  var h = i;
  noFill();
  ellipse(startX, startY, w, h);
}
