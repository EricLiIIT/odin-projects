const renderGrid = () => {
  const gridHeight = 16;
  const gridWidth = 16;

  for (let i = 0; i < gridHeight; i++) {
    let gridRow = document.createElement("div");
    gridRow.className = "grid-row";

    for (let i = 0; i < gridWidth; i++) {
      let gridCell = document.createElement("div");
      gridCell.className = "grid-cell";
      gridRow.appendChild(gridCell);
    }
    // Render one filled row at a time
    document.getElementById("grid-container").appendChild(gridRow);
  }
};

const renderCellHoverEffect = () => {
  let gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      cell.style.backgroundColor = "black";
    });
    // cell.addEventListener("mouseout", (event) => {
    //   cell.style.backgroundColor = "white";
    // });
  });
};

const clearGrid = () => {
  let clearButton = document.getElementById("clear-button");
  let gridCells = document.querySelectorAll(".grid-cell");

  clearButton.addEventListener("click", (event) => {
    gridCells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  });
};

window.addEventListener("DOMContentLoaded", (event) => {
  renderGrid();
  renderCellHoverEffect();
  clearGrid();
});
