export const shapesButton = document.getElementById("shapesButton");
export const doShapes = () => {
  squ.style.display = "inline";
  circ.style.display = "inline";
  traingu.style.display = "inline";
  lineses.style.display = "inline";
  upp.style.display = "inline";
  h2.style.display = "none";
};

shapesButton.addEventListener("click", () => doShapes());
