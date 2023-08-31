export const traingular = () => {
  localStorage.numb = "t";
  var circ = document.querySelector(".circ");
  var squ = document.querySelector(".squ");
  var traingu = document.querySelector(".traingu");
  circ.style.border = "initial";
  squ.style.border = "initial";
  traingu.style.boxShadow = "0 4px orange";
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
  let button8 = document.createElement("BUTTON");

  const buttonsDesign = (button, color) => {
    button.style.backgroundColor = "white";
    button.style.borderRadius = "0px";
    button.style.borderLeft = "30px solid transparent";
    button.style.borderRight = "30px solid transparent";
    button.style.borderBottom = `34px solid ${color}`;
    button.style.width = "0px";
    button.style.height = "0px";
    button.style.padding = "0%";
    button.style.boxShadow = "none";
  };
  0;
  order.appendChild(button1);
  buttonsDesign(button1, "blue");

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

  button8.onclick = () => {
    a = 9;
  };

  const filltheFlagTraingular = (number) => {
    number.style.borderRadius = "0";
    number.style.padding = "0";
    number.style.lineHeight = "125px";
    number.style.marginLeft = "4px";
    number.style.fontSize = "45px";
    number.style.width = "0";
    number.style.height = "0";
    number.style.borderLeft = "48px solid transparent";
    number.style.borderRight = "48px solid transparent";
    number.style.borderBottom = "120px solid rgb(50, 188, 243)";
    number.style.backgroundColor = "initial";
    number.innerText = "";

    if (a == 2) {
      number.style.borderBottom = " 120px solid blue";
    } else if (a == 3) {
      number.style.borderBottom = " 120px solid red";
    } else if (a == 4) {
      number.style.borderBottom = "120px solid gold";
    } else if (a == 5) {
      number.style.borderBottom = "120px solid green";
    } else if (a == 6) {
      number.style.borderBottom = "120px solid purple";
    } else if (a == 7) {
      number.style.borderBottom = "120px solid black";
    } else if (a == 8) {
      number.style.borderBottom = "120px solid orange";
    } else if (a == 9) {
      number.style.borderBottom = "120px solid royalblue";
    }
  };

  a1.addEventListener("click", () => filltheFlagTraingular(a1));
  b2.addEventListener("click", () => filltheFlagTraingular(b2));
  c3.addEventListener("click", () => filltheFlagTraingular(c3));
  d4.addEventListener("click", () => filltheFlagTraingular(d4));
  e5.addEventListener("click", () => filltheFlagTraingular(e5));
  f6.addEventListener("click", () => filltheFlagTraingular(f6));
  g7.addEventListener("click", () => filltheFlagTraingular(g7));
  h8.addEventListener("click", () => filltheFlagTraingular(h8));
  i9.addEventListener("click", () => filltheFlagTraingular(i9));
};

traingu.addEventListener("click", () => traingular());
