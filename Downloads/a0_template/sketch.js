let lastMinute = -1;
let mountainX = 0;
let mountainY;
let scaleFactor = 2;
let snowflakes = [];

// setup() is called once at page-load
function setup() {
  mountain = loadImage("mountains.jpg", imageLoaded);
  console.log("LOADED");
  createCanvas(1000, 600); // make an HTML canvas element width x height pixels
  mountainY = height; // Set the initial Y position for the mountains
  mountainX = width; // Set the initial X position for the mountains
  background(mountain);
  noStroke();
}

// draw() is called 60 times per second
function draw() {
  let hr = hour();
  let min = minute();
  let sec = second();

  // Check if a new minute has started
  if (min !== lastMinute) {
    //background(229, 249, 253); // Clear the canvas at the beginning of a new minute
    background(mountain);
    lastMinute = min;
    mountainX = 0; // Reset the X position for the mountains
    mountainY = height; // Reset the Y position for the mountains

    for (let i = 0; i < hr; i++) {
      let hourTriangleWidth = 150 * scaleFactor;
      let hourTriangleHeight = random(300, 350);
      let hourRandomColor = [random(180, 320), random(0, 40), random(115, 185)];

      let hourMountainX = random(width); // Generate a random x-position for the bigger mountain

      drawMountain(
        hourMountainX,
        mountainY,
        hourTriangleWidth,
        hourTriangleHeight,
        hourRandomColor
      );
    }

    for (let i = 0; i < min; i++) {
      let minTriangleWidth = 60 * scaleFactor; // Adjust this value for the width of the bigger triangle
      let minTriangleHeight = random(70, 120) * scaleFactor; // Randomize the height of the bigger triangle
      let minRandomColor = [random(80, 220), random(0, 70), random(165, 305)];

      let minMountainX = random(width); // Generate a random x-position for the bigger mountain

      drawMountain(
        minMountainX,
        mountainY,
        minTriangleWidth,
        minTriangleHeight,
        minRandomColor
      );
    }
  }

  // Draw initial mountains based on the current time
  if (frameCount === 1) {
    for (let i = 0; i < hr; i++) {
      let hourTriangleWidth = 150 * scaleFactor;
      let hourTriangleHeight = random(300, 350);
      let hourRandomColor = [random(180, 320), random(0, 40), random(115, 185)];

      let hourMountainX = random(width); // Generate a random x-position for the bigger mountain

      drawMountain(
        hourMountainX,
        mountainY,
        hourTriangleWidth,
        hourTriangleHeight,
        hourRandomColor
      );
    }

    for (let i = 0; i < min; i++) {
      let minTriangleWidth = 60 * scaleFactor; // Adjust this value for the width of the bigger triangle
      let minTriangleHeight = random(70, 120) * scaleFactor; // Randomize the height of the bigger triangle
      let minRandomColor = [random(80, 220), random(0, 70), random(165, 305)];

      let minMountainX = random(width); // Generate a random x-position for the bigger mountain

      drawMountain(
        minMountainX,
        mountainY,
        minTriangleWidth,
        minTriangleHeight,
        minRandomColor
      );
    }

    for (let i = 0; i < sec; i++) {
      let triangleWidth = 30 * scaleFactor; // Adjust this value to change the width of the triangles
      let triangleHeight = random(20, 60) * scaleFactor; // Randomize the height
      let randomColor = [random(0, 70), random(55, 195), random(165, 215)];
      let mountainX = random(width);

      drawMountain(
        mountainX,
        mountainY,
        triangleWidth,
        triangleHeight,
        randomColor
      );
    }
  }

  // Draw mountains every second
  if (frameCount % 60 === 0 && mountainX < width) {
    let triangleWidth = 30 * scaleFactor; // Adjust this value to change the width of the triangles
    let triangleHeight = random(20, 60) * scaleFactor; // Randomize the height
    let randomColor = [random(0, 70), random(55, 195), random(165, 215)];
    let mountainX = random(width);

    drawMountain(
      mountainX,
      mountainY,
      triangleWidth,
      triangleHeight,
      randomColor
    );
  }
}

// Function to draw an upright mountain
function drawMountain(x, y, width, height, mountainColor) {
  fill(mountainColor);
  triangle(x - width / 2, y, x + width / 2, y, x, y - height);
  triangle(x - width / 2, y, x + width / 2, y, x, y - height);
}

function imageLoaded() {
  console.log("Image loaded successfully!");
}
