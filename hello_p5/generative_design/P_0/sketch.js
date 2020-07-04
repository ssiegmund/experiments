function preload() { // ensusres that data is fully loaded before start eg pictures
}

function setup() { // only called once at start
    createCanvas(1200, 742); // width, heigt, renderer (P2D, WEBGL)
} 
  
function draw() { // draw is called every drawing step ie each frame
    background(220);
    fill(128);
    strokeWeight(1);
    ellipse(50,50, 80, 80);
    strokeWeight(3);
    frameRate(30); // adjusting frame rate, standard is 60 images per second
    strokeWeight(10);
    point(800,40);

    strokeWeight(2);
    rect(200, 200, 80, 40);
    // translate, rotate, scale the coordinate system
    translate(40, 20);
    rotate(0.7);
    scale(1.5);
    rect(200, 200, 80, 40); // drawing same rect again

    console.log("mouse position: " + mouseX + "; " + mouseY);
    console.log("mousekey pressed?: " + mouseIsPressed);
    console.log("key pressed?: " + keyIsPressed);
    console.log("last pressed key: " + key);
}

function mouseReleased(){ // event handler
  console.log("The mouse key was released");
}