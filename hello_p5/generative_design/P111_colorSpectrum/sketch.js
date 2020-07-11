var stepX;
var stepY;

function setup() { // only called once at start
    createCanvas(1200, 742); // width, heigt, renderer (P2D, WEBGL)
    noStroke();
    colorMode(HSB, width, height, 100); // HSB = hue-saturation-brightness; width and height refer to values from createCanvas()
} 
  
function draw() { // draw is called every drawing step ie each frame
    stepX = mouseX + 2; // +2 prevents step size from being to small, shich would lead to longer display times
    stepY = mouseY + 2;

    for(var gridY = 0; gridY < height; gridY += stepY) {
        for(var gridX = 0; gridX < width; gridX += stepX) {
            fill(gridX, height - gridY, 100);
            rect(gridX, gridY, stepX, stepY);
        }
    }
}