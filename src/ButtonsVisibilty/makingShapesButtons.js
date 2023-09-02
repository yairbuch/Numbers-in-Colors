import { shapesButton } from "../services/domService.js";

let isClicked = false;
export const doShapes = () => {
  isClicked = !isClicked;
  if (isClicked) {
    squ.style.display = "inline";
    circ.style.display = "inline";
    traingu.style.display = "inline";
    lineses.style.display = "inline";
    upp.style.display = "inline";
    h2.style.display = "none";
  } else {
    squ.style.display = "none";
    circ.style.display = "none";
    traingu.style.display = "none";
    lineses.style.display = "none";
    upp.style.display = "none";
    h2.style.display = "inline";
  }
};

shapesButton.addEventListener("click", () => doShapes());
