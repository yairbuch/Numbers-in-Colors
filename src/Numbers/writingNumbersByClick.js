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
export const writingNumbersByClick = (number, value, numOfClicks) => {
  const h1 = document.getElementById("h1");
  let body = document.getElementById("body");
  const popupContainer = document.getElementById("popup-container");
  const popupNumber = document.getElementById("popup-number");
  count += 1;
  if (localStorage.numb == "push") {
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
  if (localStorage.numb == 1) {
    a1.innerText = 1;
    a1.style.backgroundColor = "rgb(50, 188, 243)";
  }
  writingNumbersByClick(a1, 1, 1);
};

export const two = () => {
  if (localStorage.numb == 2) {
    b2.innerText = 2;
    b2.style.backgroundColor = " purple";
  }

  writingNumbersByClick(b2, 2, 22);
};

export const three = () => {
  if (localStorage.numb == 3) {
    c3.innerText = 3;
    c3.style.backgroundColor = "palegreen";
  }
  writingNumbersByClick(c3, 3, 333);
};

export const four = () => {
  if (localStorage.numb == 4) {
    d4.innerText = 4;
    d4.style.backgroundColor = "pink";
  }

  writingNumbersByClick(d4, 4, 4444);
};

export const five = () => {
  if (localStorage.numb == 5) {
    e5.innerText = 5;
    e5.style.backgroundColor = "orange";
  }

  writingNumbersByClick(e5, 5, 55555);
};

export const six = () => {
  if (localStorage.numb == 6) {
    f6.innerText = 6;
    f6.style.backgroundColor = "green";
  }

  writingNumbersByClick(f6, 6, 666666);
};

export const seven = () => {
  if (localStorage.numb == 7) {
    g7.innerText = 7;
    g7.style.backgroundColor = "gold";
  }

  writingNumbersByClick(g7, 7, 7777777);
};

export const eight = () => {
  if (localStorage.numb == 8) {
    h8.innerText = 8;
    h8.style.backgroundColor = "firebrick";
  }

  writingNumbersByClick(h8, 8, 88888888);
};

export const nine = () => {
  if (localStorage.numb == 9) {
    i9.innerText = 9;
    i9.style.backgroundColor = "aqua";
  }

  writingNumbersByClick(i9, 9, 999999999);
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
