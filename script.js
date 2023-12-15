const sketchContainer = document.querySelector(".sketch-container");

function changeColor(e) {
  e.target.style.backgroundColor = "black";
}

function gridCreator(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const createdDivRow = document.createElement("div");
    createdDivRow.style.outline = "1px solid red";
    createdDivRow.style.width = "100%";
    createdDivRow.style.height = "100%";
    createdDivRow.style.display = "flex";
    createdDivRow.style.flex = "content";
    for (let j = 0; j < gridSize; j++) {
      const createdDiv = document.createElement("div");
      createdDiv.style.outline = "1px solid green";
      createdDiv.style.display = "flex";
      createdDiv.style.flex = "content";
      createdDivRow.appendChild(createdDiv);
    }
    sketchContainer.appendChild(createdDivRow);
  }
}

for (let i = 0; i < 50; i++) {
  const createdDivRow = document.createElement("div");
  createdDivRow.setAttribute("draggable", false);
  createdDivRow.style.cssText =
    "width: 100%; height: 100%; display: flex; flex: content;";
  for (let j = 0; j < 50; j++) {
    const createdDiv = document.createElement("div");
    // createdDiv.setAttribute("draggable", false);
    // createdDiv.className = 'asdf'
    createdDiv.addEventListener("dragover", (e) => {
      e.target.style.backgroundColor = "black";
    });
    createdDiv.style.cssText = "display: flex; flex: content;";
    createdDivRow.appendChild(createdDiv);
  }
  sketchContainer.appendChild(createdDivRow);
}
