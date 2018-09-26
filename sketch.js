function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	//strokeWeight(2);
	//stroke(170);
}

function draw() {
	background(247, 247, 247);
	//Head
	fill(255, 255, 255);
	stroke(0, 0, 0);
	rect(150, 80, 140, 90);

	//Eyes
	fill(0, 0, 0);
	rect(160, 120, 120, 30);
	fill(255, 255, 255);
	ellipse(190, 135, 20);
	ellipse(250, 135, 20);

	//Body
	fill(255, 255, 255);
	stroke(0, 0, 0);
	triangle(220, 230, 250, 300, 190, 300);
	triangle(250, 300, 270, 230, 220, 230);
	triangle(190, 300, 220, 230, 170, 230);
	rect(170, 170, 100, 60);
	fill(255, 224, 024);
	noStroke();
	text("PLAY ME!", 190, 200);

	//Feet
	fill(0,0,0);
	stroke(255, 255, 255);
	triangle(250, 300, 220, 350, 280, 350);
	triangle(220, 350, 250, 300, 190, 300);
	triangle(190, 300, 220, 350, 160, 350);

	//Arms
	fill (255, 224, 024);
	triangle (170, 170, 170, 200, mouseX, mouseY);
	triangle (270, 170, 270, 200, mouseX, mouseY);



}
