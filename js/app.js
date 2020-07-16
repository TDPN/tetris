function createGrid() {
    // the main grid
    let grid = document.querySelector(".grid")
    for (let i = 0; i < GRID_SIZE; i++) {
      let gridElement = document.createElement("div")
      grid.appendChild(gridElement)
    }

    // set base of grid
    for (let i = 0; i < GRID_WIDTH; i++) {
      let gridElement = document.createElement("div")
      gridElement.setAttribute("class", "block3")
      grid.appendChild(gridElement)
    }

    let previousGrid = document.querySelector(".previous-grid")
    // Since 16 is the max grid size in which all the Tetrominoes 
    // can fit in we create one here
    for (let i = 0; i < 16; i++) {
      let gridElement = document.createElement("div")
      previousGrid.appendChild(gridElement);
    }
    return grid;
  }