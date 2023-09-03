import { directionsButton, video } from "../services/domService.js";

let dire = 0;

export const directions = () => {
  dire++;
  if (dire % 2 != 0) {
    h51.style.display = "block";
    video.style.display = "block";
  } else {
    h51.style.display = "none";
    video.style.display = "none";
  }
};

directionsButton.addEventListener("click", () => directions());
