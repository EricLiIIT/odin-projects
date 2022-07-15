const loadGrid = () => {
  const gridHeight = 16;
  const gridWidth = 16;

  for (let i = 0; i < gridHeight; i++) {
    let gridRow = document.createElement("div");
    gridRow.className = "grid-row";
    gridRow.style.display = "block";
    for (let i = 0; i < gridWidth; i++) {
      let gridCell = document.createElement("div");
      gridCell.className = "grid-cell";
      gridRow.appendChild(gridCell);
    }
    // Render one filled row at a time
    document.getElementById("grid-container").appendChild(gridRow);
  }
};

const loadCellHoverEffect = () => {
  let gridCell = document.querySelectorAll(".grid-cell");
  gridCell.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      cell.style.backgroundColor = "grey";
    });
    cell.addEventListener("mouseout", (event) => {
      cell.style.backgroundColor = "white";
    });
  });
};

window.addEventListener("DOMContentLoaded", (event) => {
  loadGrid();
  loadCellHoverEffect();
});
