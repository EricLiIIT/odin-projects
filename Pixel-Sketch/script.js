const initalGridSize = 16;
const pixelSketch = document.getElementById("pixel-sketch");
const colorPicker = document.getElementById("color-input");
const clearButton = document.getElementById("clear-button");
const selectGridSize = document.getElementById("grid-size");
const toggleButton = document.getElementById("toggle-button");

let selectedColor = colorPicker.value;

function renderGrid(gridSize) {
  removeLastGrid(); // Removes grid to make room for new grid

  // Add new grid
  const newGridContainer = document.createElement("div");
  newGridContainer.id = "grid-container";
  pixelSketch.appendChild(newGridContainer);

  // Size grid to fit new cell count
  const gridContainer = document.getElementById("grid-container");
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, auto)`;

  let cellCount = gridSize * gridSize;

  for (let i = 0; i < cellCount; i++) {
    let cell = document.createElement("div");
    cell.className = "grid-cell";
    cell.style.backgroundColor = "white";
    cell.addEventListener("mouseover", fillCellColor);
    cell.addEventListener("mousedown", fillCellColor);
    gridContainer.appendChild(cell);
  }
  // After changing grid size, this keeps the color selected
  let selectedColor = colorPicker.value;
  renderCellHoverEffect(selectedColor);
}

function clearGrid(gridCells) {
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}

function renderCellHoverEffect(selectedColor) {
  let gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", fillCellColor);
    cell.addEventListener("mousedown", fillCellColor);
  });
}

// ===== THIS IS BREAKING SLIDER ===== //

function fillCellColor(event) {
  // let mouseDown = false;
  // document.body.onmousedown = () => (mouseDown = false);
  // document.body.onmouseup = () => (mouseDown = true);
  const colorPicker = document.getElementById("color-input");
  let selectedColor = colorPicker.value;
  if (selectedColor == undefined) {
    selectedColor = "#000000";
  }
  if (event.type === "mouseover" && !mouseDown)
    event.target.style.backgroundColor = selectedColor;
}

function removeLastGrid() {
  let grid = document.getElementById("grid-container");
  grid.remove();
}

function loadGridLines() {
  let gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.style.borderStyle = "solid";
    cell.style.borderWidth = "0.001em";
  });
}

function toggleGrid(gridCells) {
  gridCells.forEach((cell) => {
    if (cell.style.borderStyle == "" || cell.style.borderStyle == "solid") {
      cell.style.border = "none";
    } else if (cell.style.borderStyle == "none") {
      cell.style.borderStyle = "solid";
      cell.style.borderWidth = "0.001em";
    }
  });
}

window.onload = () => {
  colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
    console.log("Selected Color: ", selectedColor);
    renderCellHoverEffect(selectedColor);
  });

  renderGrid(initalGridSize);
  loadGridLines();

  clearButton.addEventListener("click", () => {
    let gridCells = document.querySelectorAll(".grid-cell");
    clearGrid(gridCells);
  });

  selectGridSize.addEventListener("input", () => {
    let gridSize = selectGridSize.value;
    document.getElementById("pixel-count").textContent = gridSize;
    renderGrid(gridSize);
    loadGridLines();
    console.log("Grid Size: ", gridSize, "px ct");
  });

  toggleButton.addEventListener("click", () => {
    let gridCells = document.querySelectorAll(".grid-cell");
    toggleGrid(gridCells);
  });
};

// add label to color select
// add manual number input to specify grid size
// add a save to pc function somewhere (maybe need to use canvas?)
