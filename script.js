const sketchContainer = document.querySelector(".sketch-container");

for (let i = 0; i < 50; i++) {
  const createdDivRow = document.createElement("div");
  createdDivRow.style.outline = "1px solid red";
  createdDivRow.style.width = "100%";
  createdDivRow.style.height = "100%";
  createdDivRow.style.display = "flex";
  createdDivRow.style.flex = "content";
  for (let j = 0; j < 50; j++) {
    const createdDiv = document.createElement("div");
    createdDiv.style.outline = "1px solid green";
    createdDiv.style.display = "flex";
    createdDiv.style.flex = "content";
    createdDiv.id = `j${j}`;
    createdDivRow.appendChild(createdDiv);
  }
  sketchContainer.appendChild(createdDivRow);
}
