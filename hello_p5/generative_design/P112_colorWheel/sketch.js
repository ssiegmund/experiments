var segmentCount = 360;
var radius = 300;

function setup() { // only called once at start
    createCanvas(800, 800); // width, heigt, renderer (P2D, WEBGL)
    noStroke();
} 
  
function draw() { // draw is called every drawing step ie each frame
    colorMode(HSB, 360, width, height,); // HSB = hue-saturation-brightness; width and height refer to values from createCanvas()
    background(360, 0, height);

    var angleStep = 360 / segmentCount;

    beginShape(TRIANGLE_FAN); // TRIANGLE_FAN is method from p5.js
        vertex(width/2, height/2); // first vertex point is in the middle of the drawing canvas

        for(var angle = 0; angle <= 360; angle += angleStep) {
            var vx = width / 2 + cos(radians(angle)) * radius; // following vertex points on the circle boundary
            var vy = height / 2 + sin(radians(angle)) * radius; 
            vertex(vx, vy);
            fill(angle, mouseX, mouseY);
        }
    endShape();
}

function keyPressed(){
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    switch (key) {
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 45;
      break;
    case '3':
      segmentCount = 24;
      break;
    case '4':
      segmentCount = 12;
      break;
    case '5':
      segmentCount = 6;
      break;
    }
}