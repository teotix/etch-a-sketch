const sketchContainer = document.querySelector(".sketch-container");
const buttons = document.querySelectorAll("button");
const slider = document.querySelector("#grid-slider");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const sliderNumber = document.querySelector('#slider-num')

let holding = false;

addEventListener("dragstart", function (e) {
  e.preventDefault();
});

function clicked(e) {
  buttons.forEach((button) => {
    button.classList.remove("clicked");
  });
  e.target.classList.toggle("clicked");
}

function changeColor(e) {
  e.target.style.backgroundColor = "black";
}

function gridCreator() {
  sliderNumber.textContent = `${slider.value}x${slider.value}`
  for (let i = 0; i < slider.value; i++) {
    let createdDivRow = document.createElement("div");
    createdDivRow.style.cssText =
      "width: 100%; height: 100%; display: flex; flex: content;";
    for (let j = 1; j < slider.value; j++) {
      let createdDiv = document.createElement("div");
      sketchContainer.addEventListener("mousedown", (e) => {
        holding = true;
      });
      sketchContainer.addEventListener("mouseup", (e) => {
        holding = false;
      });
      sketchContainer.addEventListener("mouseleave", (e) => {
        holding = false;
      });
      sketchContainer.addEventListener("mousemove", (e) => {
        if (holding == true) {
          e.target.style.backgroundColor = "black";
        }
      });
      createdDiv.style.cssText = "display: flex; flex: content;";
      createdDivRow.appendChild(createdDiv);
    }
    sketchContainer.appendChild(createdDivRow);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", clicked);
});
slider.addEventListener('change', (e) => {
  sliderNumber.textContent = `${e.target.value}x${e.target.value}`
})
slider.addEventListener("change", (e) => {
  sketchContainer.innerHTML = "";
});
slider.addEventListener("change", gridCreator);

gridCreator();

// for (let i = 0; i < 50; i++) {
//   const createdDivRow = document.createElement("div");
//   createdDivRow.style.cssText =
//     "width: 100%; height: 100%; display: flex; flex: content;";
//   for (let j = 0; j < 50; j++) {
//     const createdDiv = document.createElement("div");
//     sketchContainer.addEventListener("mousedown", (e) => {
//       holding = true;
//     });
//     sketchContainer.addEventListener("mouseup", (e) => {
//       holding = false;
//     });
//     sketchContainer.addEventListener("mousemove", (e) => {
//       if (holding == true) {
//         e.target.style.backgroundColor = "black";
//       }
//     });
//     createdDiv.style.cssText = "display: flex; flex: content;";
//     createdDivRow.appendChild(createdDiv);
//   }
//   sketchContainer.appendChild(createdDivRow);
// }
