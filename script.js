addEventListener("DOMContentLoaded", () => {
  const sketchContainer = document.querySelector(".sketch-container");
  const buttons = document.querySelectorAll(".color-buttons button");
  const slider = document.querySelector("#grid-slider");
  const btnBlack = document.querySelector("#btn-black");
  const btnColor = document.querySelector("#btn-color");
  const btnGradual = document.querySelector("#btn-gradual");
  const sliderNumber = document.querySelector("#slider-num");
  const btnReset = document.querySelector("#btn-reset");
  const header = document.querySelector("#header");

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  function darkenElement(element) {
    let computedStyle = getComputedStyle(element);
    let bgColor = computedStyle.backgroundColor;
    let rgbValues = bgColor.match(/\d+/g).map(Number);
    let darkerColors = rgbValues.map((element) => (element -= 25.5));
    console.log(
      `rgb(${darkerColors[0]}, ${darkerColors[1]}, ${darkerColors[2]})`
    );

    darkerColors.length == 3
      ? (element.style.backgroundColor = `rgb(${darkerColors[0]}, ${darkerColors[1]}, ${darkerColors[2]})`)
      : (element.style.backgroundColor = `rgba(${darkerColors[0]}, ${darkerColors[1]}, ${darkerColors[2]}, ${darkerColors[3]})`);
  }

  function clicked(e) {
    buttons.forEach((button) => {
      button.classList.remove("clicked");
    });
    e.target.classList.toggle("clicked");
  }

  let holding = false;

  function colorizeText(text, element) {
    for (const letter of text) {
      let span = document.createElement("span");

      span.textContent = letter;

      span.style.color = randomColor();

      element.appendChild(span);
    }
  }

  function gridCreator() {
    sliderNumber.textContent = `${slider.value}x${slider.value}`;
    for (let i = 0; i < slider.value; i++) {
      let createdDivRow = document.createElement("div");
      createdDivRow.style.cssText =
        "width: 100%; height: 100%; display: flex; flex: content; background-color: rgb(255,255,255)";
      for (let j = 1; j < slider.value; j++) {
        let createdDiv = document.createElement("div");
        createdDiv.addEventListener("mousedown", (e) => {
          holding = true;
          if (holding == true) {
            if (btnBlack.classList.contains("clicked")) {
              e.target.style.backgroundColor = "rgb(0, 0, 0)";
            } else if (btnColor.classList.contains("clicked")) {
              e.target.style.backgroundColor = randomColor();
            } else if (btnGradual.classList.contains("clicked")) {
              darkenElement(e.target);
            }
          }
        });
        createdDiv.addEventListener("mouseup", (e) => {
          holding = false;
        });
        sketchContainer.addEventListener("mouseleave", (e) => {
          holding = false;
        });
        createdDiv.addEventListener("mouseenter", (e) => {
          if (holding == true) {
            if (btnBlack.classList.contains("clicked")) {
              e.target.style.backgroundColor = "rgb(0, 0, 0)";
            } else if (btnColor.classList.contains("clicked")) {
              e.target.style.backgroundColor = randomColor();
            } else if (btnGradual.classList.contains("clicked")) {
              darkenElement(e.target);
            }
          }
        });

        createdDiv.style.cssText =
          "display: flex; flex: content; background-color: rgb(255, 255, 255)";
        createdDivRow.appendChild(createdDiv);
      }
      sketchContainer.appendChild(createdDivRow);
    }
  }

  let headerString = "Etch-a-Sketch";

  colorizeText(headerString, header);

  Array.from(header.innerHTML).forEach((element) => console.log(element));

  addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  buttons.forEach((button) => {
    button.addEventListener("click", clicked);
  });
  slider.addEventListener("change", (e) => {
    sliderNumber.textContent = `${e.target.value}x${e.target.value}`;
  });
  slider.addEventListener("change", (e) => {
    sketchContainer.innerHTML = "";
  });

  btnReset.addEventListener("click", (e) => {
    sketchContainer.innerHTML = "";
  });
  btnReset.addEventListener("click", gridCreator);

  slider.addEventListener("change", gridCreator);

  gridCreator();
});
