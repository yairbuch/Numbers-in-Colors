export const square = () => {
  localStorage.numb = "t";
  var squ = document.querySelector(".squ");
  var circ = document.querySelector(".circ");
  var traingu = document.querySelector(".traingu");
  const countryName = document.getElementById("boxsh");
  squ.style.border = "groove";
  circ.style.border = "initial";
  traingu.style.boxShadow = "initial";
  order.innerHTML = "";
  order2.innerHTML = "";

  let initNumb = 0;

  let button1 = document.createElement("BUTTON");
  let button2 = document.createElement("BUTTON");
  let button3 = document.createElement("BUTTON");
  let button4 = document.createElement("BUTTON");
  let button5 = document.createElement("BUTTON");
  let button6 = document.createElement("BUTTON");
  let button7 = document.createElement("BUTTON");
  let button8 = document.createElement("BUTTON");
  let button9 = document.createElement("BUTTON");

  const buttonsDesign = (button, color) => {
    button.style.backgroundColor = color;
    button.style.minHeight = "42px";
    button.style.minWidth = "42px";
    button.style.borderRadius = "0";
    button.style.border = "1px solid black";
  };

  order.appendChild(button1);
  buttonsDesign(button1, " blue");

  order.appendChild(button2);
  button2.style.marginLeft = "13px";
  buttonsDesign(button2, "red");

  order.appendChild(button3);
  button3.style.marginLeft = "13px";
  buttonsDesign(button3, "gold");

  order.appendChild(button4);
  button4.style.marginLeft = "13px";
  buttonsDesign(button4, "green");

  order.appendChild(button5);
  button5.style.marginLeft = "13px";
  buttonsDesign(button5, "purple");

  order2.appendChild(button6);
  button6.style.marginLeft = "13px";
  buttonsDesign(button6, "black");

  order2.appendChild(button7);
  button7.style.marginLeft = "13px";
  buttonsDesign(button7, "orange");

  order2.appendChild(button8);
  button8.style.marginLeft = "13px";
  buttonsDesign(button8, "royalblue");

  order2.appendChild(button9);
  button9.style.marginLeft = "13px";
  buttonsDesign(button9, "white");

  button1.onclick = () => {
    initNumb = 2;
  };

  button2.onclick = () => {
    initNumb = 3;
  };

  button3.onclick = () => {
    initNumb = 4;
  };

  button4.onclick = () => {
    initNumb = 5;
  };

  button5.onclick = () => {
    initNumb = 6;
  };

  button6.onclick = () => {
    initNumb = 7;
  };

  button7.onclick = () => {
    initNumb = 8;
  };

  button8.onclick = () => {
    initNumb = 9;
  };

  button9.onclick = () => {
    initNumb = 10;
  };
  const FillTheFlagSquare = (number) => {
    number.style.borderRadius = 0;
    number.style.padding = "0";
    number.style.lineHeight = "100px";
    number.style.marginLeft = "0";
    number.style.fontSize = "45px";
    number.style.width = "100px";
    number.style.height = "100px";
    number.style.borderLeft = "0";
    number.style.borderRight = "0";
    number.style.borderBottom = "0";
    number.style.backgroundColor = "rgb(50, 188, 243)";
    number.innerText = "";
    number.style.background = "white";

    if (initNumb == 2) {
      number.style.backgroundColor = "blue";
    } else if (initNumb == 3) {
      number.style.backgroundColor = "red";
    } else if (initNumb == 4) {
      number.style.backgroundColor = "gold";
    } else if (initNumb == 5) {
      number.style.backgroundColor = "green";
    } else if (initNumb == 6) {
      number.style.backgroundColor = "purple";
    } else if (initNumb == 7) {
      number.style.backgroundColor = "black";
    } else if (initNumb == 8) {
      number.style.backgroundColor = "orange";
    } else if (initNumb == 9) {
      number.style.backgroundColor = "royalblue";
    } else if (initNumb == 10) {
      number.style.backgroundColor = "white";
    }

    if (countryName.value === "איטליה") {
      if (
        a1.style.backgroundColor === "green" &&
        b2.style.backgroundColor === "white" &&
        c3.style.backgroundColor === "red" &&
        d4.style.backgroundColor === "green" &&
        e5.style.backgroundColor === "white" &&
        f6.style.backgroundColor === "red" &&
        g7.style.backgroundColor === "green" &&
        h8.style.backgroundColor === "white" &&
        i9.style.backgroundColor === "red"
      ) {
        body.style.backgroundColor = "yellow";
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    } else if (countryName.value === "אירלנד") {
      if (
        a1.style.backgroundColor === "green" &&
        b2.style.backgroundColor === "white" &&
        c3.style.backgroundColor === "orange" &&
        d4.style.backgroundColor === "green" &&
        e5.style.backgroundColor === "white" &&
        f6.style.backgroundColor === "orange" &&
        g7.style.backgroundColor === "green" &&
        h8.style.backgroundColor === "white" &&
        i9.style.backgroundColor === "orange"
      ) {
        body.style.backgroundColor = "yellow";
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    } else if (countryName.value === "גרמניה") {
      if (
        a1.style.backgroundColor === "black" &&
        b2.style.backgroundColor === "black" &&
        c3.style.backgroundColor === "black" &&
        d4.style.backgroundColor === "red" &&
        e5.style.backgroundColor === "red" &&
        f6.style.backgroundColor === "red" &&
        g7.style.backgroundColor === "gold" &&
        h8.style.backgroundColor === "gold" &&
        i9.style.backgroundColor === "gold"
      ) {
        body.style.backgroundColor = "yellow";
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    } else if (countryName.value === "צרפת") {
      if (
        a1.style.backgroundColor === "blue" &&
        b2.style.backgroundColor === "white" &&
        c3.style.backgroundColor === "red" &&
        d4.style.backgroundColor === "blue" &&
        e5.style.backgroundColor === "white" &&
        f6.style.backgroundColor === "red" &&
        g7.style.backgroundColor === "blue" &&
        h8.style.backgroundColor === "white" &&
        i9.style.backgroundColor === "red"
      ) {
        body.style.backgroundColor = "yellow";
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    } else if (countryName.value === "יפן") {
      if (
        a1.style.backgroundColor === "white" &&
        b2.style.backgroundColor === "white" &&
        c3.style.backgroundColor === "white" &&
        d4.style.backgroundColor === "white" &&
        e5.style.backgroundColor === "red" &&
        e5.style.borderRadius === "50%" &&
        f6.style.backgroundColor === "white" &&
        g7.style.backgroundColor === "white" &&
        h8.style.backgroundColor === "white" &&
        i9.style.backgroundColor === "white"
      ) {
        body.style.backgroundColor = "yellow";
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    } else if (countryName.value === "ארגנטינה") {
      if (
        a1.style.backgroundColor === "royalblue" &&
        b2.style.backgroundColor === "royalblue" &&
        c3.style.backgroundColor === "royalblue" &&
        d4.style.backgroundColor === "white" &&
        f6.style.backgroundColor === "white" &&
        g7.style.backgroundColor === "royalblue" &&
        h8.style.backgroundColor === "royalblue" &&
        i9.style.backgroundColor === "royalblue"
      ) {
        body.style.backgroundColor = "yellow";
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    }
  };

  a1.addEventListener("click", () => FillTheFlagSquare(a1));
  b2.addEventListener("click", () => FillTheFlagSquare(b2));
  c3.addEventListener("click", () => FillTheFlagSquare(c3));
  d4.addEventListener("click", () => FillTheFlagSquare(d4));
  e5.addEventListener("click", () => FillTheFlagSquare(e5));
  f6.addEventListener("click", () => FillTheFlagSquare(f6));
  g7.addEventListener("click", () => FillTheFlagSquare(g7));
  h8.addEventListener("click", () => FillTheFlagSquare(h8));
  i9.addEventListener("click", () => FillTheFlagSquare(i9));
};

squ.addEventListener("click", () => square());
