let dire = 0;
export const directionsButton = document.getElementById("h2");
export const directions = () => {
  dire++;
  if (dire % 2 != 0) {
    h51.style.display = "block";
    h52.style.display = "block";
    h53.style.display = "block";
    h54.style.display = "block";
    h55.style.display = "block";
    h56.style.display = "block";
    h57.style.display = "block";
    h58.style.display = "block";
  } else {
    h51.style.display = "none";
    h52.style.display = "none";
    h53.style.display = "none";
    h54.style.display = "none";
    h55.style.display = "none";
    h56.style.display = "none";
    h57.style.display = "none";
    h58.style.display = "none";
  }
};

directionsButton.addEventListener("click", () => directions());
