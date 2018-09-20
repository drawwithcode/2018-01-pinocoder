function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(204);

	//Neck
	line(400, 285, 250, 345);

	//Wheel
	ellipse(600, 465, 70, 70);

	//Body
	rect(50, 325, 100, 140);

	//Head
	ellipse(250, 240, 90, 90);
}
