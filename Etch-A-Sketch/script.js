const renderGrid = (gridSize) => {
  const previousGrid = document.getElementById("grid-container");
  previousGrid.remove();
  const etchASketchContainer = document.getElementById("etch-a-sketch");
  const knobContainer = document.getElementById("knob-container");
  const newGridContainer = document.createElement("div");
  newGridContainer.id = "grid-container";

  etchASketchContainer.insertBefore(newGridContainer, knobContainer);
  for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement("div");
    gridRow.className = "grid-row";

    for (let i = 0; i < gridSize; i++) {
      let gridCell = document.createElement("div");
      gridCell.className = "grid-cell";
      gridRow.appendChild(gridCell);
    }
    // Render one filled row at a time
    document.getElementById("grid-container").appendChild(gridRow);
  }
  renderCellHoverEffect();
  clearGrid();
};

const renderCellHoverEffect = () => {
  let gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      cell.style.backgroundColor = "black";
    });
  });
};

const clearGrid = () => {
  let clearButton = document.getElementById("clear-button");
  let gridCells = document.querySelectorAll(".grid-cell");
  clearButton.addEventListener("click", (event) => {
    gridCells.forEach((cell) => {
      cell.style.backgroundColor = "grey";
    });
  });
};

window.addEventListener("DOMContentLoaded", (event) => {
  const initalGridSize = 8;
  const selectGridSize = document.getElementById("grid-size");
  selectGridSize.addEventListener("change", () => {
    console.log(selectGridSize.value);
    renderGrid(selectGridSize.value);
  });
  renderGrid(initalGridSize);
  renderCellHoverEffect();
  clearGrid();
});
