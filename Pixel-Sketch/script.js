const renderGrid = (gridSize) => {
  removeLastGrid();
  const pixelSketch = document.getElementById("pixel-sketch");

  const newGridContainer = document.createElement("div");
  newGridContainer.id = "grid-container";

  pixelSketch.appendChild(newGridContainer);

  const gridContainer = document.getElementById("grid-container");
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, auto)`;

  let cellCount = gridSize * gridSize;

  for (let i = 0; i < cellCount; i++) {
    let cell = document.createElement("div");
    cell.className = "grid-cell";
    gridContainer.appendChild(cell);
  }

  renderCellHoverEffect();
};

const clearGrid = (gridCells) => {
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = "orange";
  });
};

const renderCellHoverEffect = () => {
  let gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
  });
};

const removeLastGrid = () => {
  let grid = document.getElementById("grid-container");
  grid.remove();
};

const selectGridSize = () => {};

window.addEventListener("DOMContentLoaded", () => {
  const initalGridSize = 8;

  renderGrid(initalGridSize);
  renderCellHoverEffect();

  const clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", () => {
    let gridCells = document.querySelectorAll(".grid-cell");
    clearGrid(gridCells);
  });

  const selectGridSize = document.getElementById("grid-size");
  selectGridSize.addEventListener("change", () => {
    console.log(selectGridSize.value, "px");
    renderGrid(selectGridSize.value);
  });
});

// add a save to pc function somewhere