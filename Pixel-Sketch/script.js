window.addEventListener("DOMContentLoaded", () => {
  const renderGrid = (gridSize) => {
    removeLastGrid(); // Removes grid to make room for new grid

    // Add new grid
    const pixelSketch = document.getElementById("pixel-sketch");
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
      gridContainer.appendChild(cell);
    }
    // After changing grid size, this keeps the color selected
    const colorPicker = document.getElementById("color-input");
    let selectedColor = colorPicker.value;
    renderCellHoverEffect(selectedColor);
  };

  const clearGrid = (gridCells) => {
    gridCells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  };

  const renderCellHoverEffect = (selectedColor) => {
    if (selectedColor == undefined) {
      selectedColor = "#000000";
    }
    let gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        if (event.buttons == 1) {
          cell.style.backgroundColor = selectedColor;
        }
      });
      cell.addEventListener("click", (event) => {
        console.log("clicked");
        cell.style.backgroundColor = selectedColor;
      });
    });
  };

  const removeLastGrid = () => {
    let grid = document.getElementById("grid-container");
    grid.remove();
  };

  const loadGridLines = () => {
    let gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((cell) => {
      cell.style.borderStyle = "solid";
      cell.style.borderWidth = "0.001em";
    });
  };

  const toggleGrid = (gridCells) => {
    gridCells.forEach((cell) => {
      if (cell.style.borderStyle == "" || cell.style.borderStyle == "solid") {
        cell.style.border = "none";
      } else if (cell.style.borderStyle == "none") {
        cell.style.borderStyle = "solid";
        cell.style.borderWidth = "0.001em";
      }
    });
  };

  // Previous content load
  const initalGridSize = 16;

  const colorPicker = document.getElementById("color-input");
  let selectedColor = colorPicker.value;

  colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
    console.log("Selected Color: ", selectedColor);
    renderCellHoverEffect(selectedColor);
  });

  renderGrid(initalGridSize);
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
    toggleGrid(gridCells);
  });
});

// add a save to pc function somewhere (maybe need to use canvas?)
// only allow drawing when holding mouse
