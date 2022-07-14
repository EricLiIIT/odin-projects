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
      let gridSquare = document.createElement("div");
      gridRow.appendChild(gridSquare);
      gridSquare.style.display = "inline-block";
      gridSquare.style.width = "20px";
      gridSquare.style.height = "20px";
      gridSquare.style.borderStyle = "solid";
      gridSquare.style.borderColor = "black";
      // gridSquare.style.backgroundColor = "Blue";
      gridSquare.style.marginRight = "5px";
    }
    // Append row after adding grid squares,
    // not before (then adding grid squares once
    // the row has been added to the dom)
    document.body.appendChild(gridRow);
  }
  // div.style.height = gridHeight;
  // div.style.width = gridWidth;
});
