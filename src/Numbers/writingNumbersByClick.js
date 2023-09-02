import {
  h1,
  body,
  popupContainer,
  popupNumber,
} from "../services/domService.js";

let count = 0;
let colorIndex = 0;
const colors = [
  "rgb(50, 188, 243)",
  "rgb(198, 40, 198)",
  "palegreen",
  "pink",
  "orange",
  "green",
  "gold",
  "firebrick",
  "aqua",
];

export const writingNumbersByClick = (
  number,
  value,
  numOfClicks,
  backgroundColor
) => {
  count += 1;
  if (localStorage.numb == "count") {
    navigator.vibrate(40);
    number.style.color = "white";
    number.style.border = "groove";

    popupNumber.textContent = count;
    popupContainer.style.display = "block";
    popupContainer.style.color = colors[colorIndex];

    colorIndex = (colorIndex + 1) % colors.length;

    setTimeout(() => {
      popupContainer.style.opacity = "0";
    }, 1000);

    setTimeout(() => {
      popupNumber.textContent = "";
      popupContainer.style.display = "none";
      popupContainer.style.opacity = "1";
    }, 1000);
    h1.innerHTML += value;

    if (h1.innerHTML == numOfClicks) {
      mainHead.innerHTML = ":) תמר";
      mainHead.style.color = "Blue";
      mainHead.style.fontSize = "50px";
      body.style.backgroundColor = "yellow";
      setTimeout(() => {
        document.location.reload();
      }, 2000);
    }
  } else if (
    localStorage.numb[0] != value &&
    localStorage.numb[1] != value &&
    localStorage.numb[2] != value
  ) {
  } else if (localStorage.numb[0] != value && h1.innerHTML == "") {
  } else if (
    localStorage.numb[1] != value &&
    h1.innerHTML > 0 &&
    h1.innerHTML < 10
  ) {
  } else if (
    localStorage.numb[2] != value &&
    h1.innerHTML > 10 &&
    h1.innerHTML < 100
  ) {
  } else {
    number.style.color = "white";
    number.style.border = "groove";
    number.style.backgroundColor = backgroundColor;
    number.innerText = value;
    h1.innerHTML += value;
  }
  if (h1.innerHTML == localStorage.numb) {
    mainHead.innerHTML = ":) תמר";
    mainHead.style.color = "Blue";
    mainHead.style.fontSize = "50px";
    body.style.backgroundColor = "yellow";
    setTimeout(() => {
      document.location.reload();
    }, 2000);
  }
};

export const one = () => {
  writingNumbersByClick(a1, 1, 1, colors[0]);
};

export const two = () => {
  writingNumbersByClick(b2, 2, 22, colors[1]);
};

export const three = () => {
  writingNumbersByClick(c3, 3, 333, colors[2]);
};

export const four = () => {
  writingNumbersByClick(d4, 4, 4444, colors[3]);
};

export const five = () => {
  writingNumbersByClick(e5, 5, 55555, colors[4]);
};

export const six = () => {
  writingNumbersByClick(f6, 6, 666666, colors[5]);
};

export const seven = () => {
  writingNumbersByClick(g7, 7, 7777777, colors[6]);
};

export const eight = () => {
  writingNumbersByClick(h8, 8, 88888888, colors[7]);
};

export const nine = () => {
  writingNumbersByClick(i9, 9, 999999999, colors[8]);
};

a1.onclick = () => one();
b2.onclick = () => two();
c3.onclick = () => three();
d4.onclick = () => four();
e5.onclick = () => five();
f6.onclick = () => six();
g7.onclick = () => seven();
h8.onclick = () => eight();
i9.onclick = () => nine();
