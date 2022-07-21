const AQUABLUE = "#9efff5";

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
    cell.style.backgroundColor = AQUABLUE;
  });
};

const renderCellHoverEffect = () => {
  let gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "pink";
    });
  });
};

const removeLastGrid = () => {
  let grid = document.getElementById("grid-container");
  grid.remove();
};

window.addEventListener("DOMContentLoaded", () => {
  const initalGridSize = 8;

  renderGrid(initalGridSize);
  renderCellHoverEffect();

  let loadGridLines = () => {
    let gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((cell) => {
      cell.style.borderStyle = "solid";
      cell.style.borderWidth = "0.001em";
    });
  }; // move elsewhere?

  loadGridLines();

  const clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", () => {
    let gridCells = document.querySelectorAll(".grid-cell");
    clearGrid(gridCells);
  });

  const selectGridSize = document.getElementById("grid-size");
  selectGridSize.addEventListener("input", () => {
    let gridSize = selectGridSize.value;
    document.getElementById("pixel-count").textContent = gridSize;
    renderGrid(gridSize);
    loadGridLines();
    console.log("Grid Size: ", gridSize, "px ct");
  });

  const toggleButton = document.getElementById("toggle-button");
  toggleButton.addEventListener("click", () => {
    let gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach((cell) => {
      if (cell.style.borderStyle == "" || cell.style.borderStyle == "solid") {
        cell.style.border = "none";
      } else if (cell.style.borderStyle == "none") {
        cell.style.borderStyle = "solid";
        cell.style.borderWidth = "0.001em";
      }
    });
  });
});

// add color picker function
// add a save to pc function somewhere
