let colors = [];
let color1, color2, color3;
let gridSize = 80; // Default grid size

let c;

let rec = false;

function setup() {
  c = createCanvas(1920 / 1.5, 1080 / 1.5);
  frameRate(fps);
  c.parent("sketch-wrapper");
  imageMode(CENTER);

  // Initialize default colors
  color1 = color("#C8C4DF");
  color2 = color("#E6DFB6");
  color3 = color("#BCD7D7");

  // Initialize colors for the first time
  initializeColors();

  // Add event listeners to color inputs
  document.getElementById("color1").addEventListener("input", updateColors);
  document.getElementById("color2").addEventListener("input", updateColors);
  document.getElementById("color3").addEventListener("input", updateColors);

  // Add event listener for grid size slider
  const gridSizeSlider = document.getElementById("grid-size");
  gridSizeSlider.addEventListener("input", updateGridSize);
}

function draw() {
  let cellSize = width / gridSize;
  noStroke();

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let counter = int(random(1, 6));

      if (counter == 4) {
        colors[i][j] = color1;
      } else if (counter == 2) {
        colors[i][j] = color2;
      } else {
        colors[i][j] = color3;
      }
    }
  }

  // Draw the grid
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      fill(colors[i][j]);
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }

  manageRecording();
}

function initializeColors() {
  // Initialize the 2D array for static colors
  colors = [];
  for (let i = 0; i < gridSize; i++) {
    colors[i] = [];
    for (let j = 0; j < gridSize; j++) {
      let counter = int(random(1, 6));

      if (counter == 4) {
        colors[i][j] = color1;
      } else if (counter == 2) {
        colors[i][j] = color2;
      } else {
        colors[i][j] = color3;
      }
    }
  }
}

function updateColors() {
  // Get selected colors from the HTML inputs
  let newColor1 = document.getElementById("color1").value;
  let newColor2 = document.getElementById("color2").value;
  let newColor3 = document.getElementById("color3").value;

  // Update the color variables
  color1 = color(newColor1);
  color2 = color(newColor2);
  color3 = color(newColor3);
}

function updateGridSize() {
  // Update grid size based on slider value
  gridSize = parseInt(document.getElementById("grid-size").value);
  document.getElementById("grid-size-value").textContent = gridSize;

  // Reinitialize the grid with the new size
  initializeColors();
}
