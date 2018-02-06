function setup() { 
  createCanvas(400, 400);
	colorMode(RGB);
	
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(236, 95, 105);
  } else if (key == 'G') {
    fill(175, 253, 191);
  } else if (key == 'B') {
    fill(62, 162, 244); 
  } else if (key == 'O') {
		fill(251, 125, 75);
	} else if (key == 'Y') {
		fill(251, 210, 75);
	} else if (key == 'P') {
		fill(238, 170, 253);
	} else if (key == '1') {
		diameter = 10;
	} else if (key == '2') {
		diameter = 20;
	} else if (key == '3') {
		diameter = 30;
	}
}
