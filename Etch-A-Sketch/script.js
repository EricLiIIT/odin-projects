window.addEventListener("DOMContentLoaded", (event) => {
  const gridHeight = 16;
  const gridWidth = 16;

  console.log("DOM conent loaded");
  // document.getElementById("grid-container").appendChild(div);
  for (let i = 0; i < gridHeight; i++) {
    let gridRow = document.createElement("div");
    gridRow.className = "grid-row";
    gridRow.style.display = "block";
    for (let i = 0; i < gridWidth; i++) {
      let gridCell = document.createElement("div");
      gridCell.className = "grid-cell";
      gridRow.appendChild(gridCell);
    }
    // Append row after adding grid squares,
    // not before (then adding grid squares once
    // the row has been added to the dom)
    document.getElementById("grid-container").appendChild(gridRow);
  }

  let gridCell = document.querySelectorAll(".grid-cell");
  gridCell.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      cell.style.backgroundColor = "cyan";
    });
    cell.addEventListener("mouseout", (event) => {
      cell.style.backgroundColor = "white";
    });
  });
});
