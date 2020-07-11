var tileCountX = 2;
var tileCountY = 10;

var colorsLeft = [];
var colorsRight = [];
var colors = [];

var interpolateShortest = true;

function setup() {
  createCanvas(1200, 742); // width, heigt, renderer (P2D, WEBGL)
  colorMode(HSB);
  noStroke();
  shakeColors();
}
  
function draw() { // draw is called every drawing step ie each frame
    tileCountX = int(map(mouseX, 0, width, 2, 100));
    tileCountY = int(map(mouseY, 0, height, 2, 10));
    var tileWidth = width / tileCountX;
    var tileHeight = height / tileCountY;
    var interCol;
    colors = [];

    for(var gridY = 0; gridY < tileCountY; gridY++){
        var col1 = colorsLeft[gridY];
        var col2 = colorsRight[gridY];

        for(var gridX = 0; gridX < tileCountX; gridX++) {
            var amount = map(gridX, 0, tileCountX - 1, 0, 1);

            if (interpolateShortest) {
                // switch to rgb
                colorMode(RGB);
                interCol = lerpColor(col1, col2, amount); // lerpColor() performs the interpolation between the individual color values
                // switch back
                colorMode(HSB);
              } else {
                interCol = lerpColor(col1, col2, amount);
              }
        
              fill(interCol);

              var posX = tileWidth * gridX;
              var posY = tileHeight * gridY;
              rect(posX, posY, tileWidth, tileHeight);

              // save color for potential ase export
              colors.push(interCol);
        }
    }

}

function shakeColors() {
    for (var i = 0; i < tileCountY; i++) {
      colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
      colorsRight[i] = color(random(160, 190), 100, random(0, 100));
    }
  }
  
  function mouseReleased() {
    shakeColors();
  }
  
  function keyPressed() {
    if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (key == '1') interpolateShortest = true;
    if (key == '2') interpolateShortest = false;
  }
  