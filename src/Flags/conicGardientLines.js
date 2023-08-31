export const conicButton = document.getElementById("upp");
export const conicGradientLines = () => {
  localStorage.numb = "t";
  const countryName = document.getElementById("boxsh");
  order.innerHTML = "";
  order2.innerHTML = "";

  let a = 0;

  let button1 = document.createElement("BUTTON");
  let button2 = document.createElement("BUTTON");
  let button3 = document.createElement("BUTTON");
  let button4 = document.createElement("BUTTON");
  let button5 = document.createElement("BUTTON");
  let button6 = document.createElement("BUTTON");
  let button7 = document.createElement("BUTTON");

  const buttonsDesign = (button, color) => {
    button.style.background = color;
    button.style.minHeight = "42px";
    button.style.minWidth = "42px";
    button.style.borderRadius = "0";
    button.style.border = "1px solid black";
  };

  order.appendChild(button1);
  buttonsDesign(
    button1,
    " conic-gradient(white 180deg, red 180deg 270deg, white 270deg 360deg)"
  );

  order.appendChild(button2);
  button2.style.marginLeft = "13px";
  buttonsDesign(button2, "white");

  order.appendChild(button3);
  button3.style.marginLeft = "13px";
  buttonsDesign(button3, "conic-gradient(white 50%, red 50%)");

  order.appendChild(button4);
  button4.style.marginLeft = "13px";
  buttonsDesign(
    button4,
    "conic-gradient(white 90deg, red 90deg 180deg, white 180deg 360deg)"
  );

  order.appendChild(button5);
  button5.style.marginLeft = "13px";
  buttonsDesign(button5, "conic-gradient(red 50%, white 50%)");

  order2.appendChild(button6);
  button6.style.marginLeft = "13px";
  buttonsDesign(button6, "conic-gradient(white 270deg, red 270deg 360deg)");

  order2.appendChild(button7);
  button7.style.marginLeft = "13px";
  buttonsDesign(button7, "conic-gradient(red 90deg, white 90deg 360deg)");

  button1.onclick = () => {
    a = 2;
  };

  button2.onclick = () => {
    a = 3;
  };

  button3.onclick = () => {
    a = 4;
  };

  button4.onclick = () => {
    a = 5;
  };

  button5.onclick = () => {
    a = 6;
  };

  button6.onclick = () => {
    a = 7;
  };

  button7.onclick = () => {
    a = 8;
  };

  const fillTheFlagUp = (number) => {
    number.style.borderLeft = "0";
    number.style.borderRight = "0";
    number.style.borderBottom = "0";
    number.style.borderRadius = 0;
    number.style.padding = "0";
    number.style.lineHeight = "100px";
    number.style.marginLeft = "0";
    number.style.fontSize = "45px";
    number.style.width = "100px";
    number.style.height = "100px";
    number.innerText = "";

    if (a == 2) {
      number.style.backgroundImage =
        "conic-gradient(white 180deg, red 180deg 270deg, white 270deg 360deg)";
      number.innerText = "1";
      number.style.fontSize = "1px";
    } else if (a == 3) {
      number.style.background = "white";
    } else if (a == 4) {
      number.style.backgroundImage = "conic-gradient(white 50%, red 50%)";
      number.innerText = "2";
      number.style.fontSize = "1px";
    } else if (a == 5) {
      number.style.backgroundImage =
        "conic-gradient(white 90deg, red 90deg 180deg, white 180deg 360deg)";
      number.innerText = "3";
      number.style.fontSize = "1px";
    } else if (a == 6) {
      number.style.backgroundImage = "conic-gradient(red 50%, white 50%)";
      number.innerText = "4";
      number.style.fontSize = "1px";
    } else if (a == 7) {
      number.style.backgroundImage =
        "conic-gradient(white 270deg, red 270deg 360deg)";
      number.innerText = "5";
      number.style.fontSize = "1px";
    } else if (a == 8) {
      number.style.backgroundImage =
        "conic-gradient(red 90deg, white 90deg 360deg)";
      number.innerText = "6";
      number.style.fontSize = "1px";
    }

    if (countryName.value === "קנדה") {
      if (
        a1.innerText === "1" &&
        b2.style.background === "white" &&
        c3.innerText === "3" &&
        d4.innerText === "2" &&
        f6.innerText === "4" &&
        g7.innerText === "5" &&
        h8.style.background === "white" &&
        i9.innerText === "6"
      ) {
        body.style.backgroundColor = "yellow";
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    }
  };

  a1.addEventListener("click", () => fillTheFlagUp(a1));
  b2.addEventListener("click", () => fillTheFlagUp(b2));
  c3.addEventListener("click", () => fillTheFlagUp(c3));
  d4.addEventListener("click", () => fillTheFlagUp(d4));
  e5.addEventListener("click", () => fillTheFlagUp(e5));
  f6.addEventListener("click", () => fillTheFlagUp(f6));
  g7.addEventListener("click", () => fillTheFlagUp(g7));
  h8.addEventListener("click", () => fillTheFlagUp(h8));
  i9.addEventListener("click", () => fillTheFlagUp(i9));
};

conicButton.addEventListener("click", () => conicGradientLines());
