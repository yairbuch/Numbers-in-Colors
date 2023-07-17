export const traingular = () => {
  localStorage.numb = "t";
  var circ = document.querySelector(".circ");
  var squ = document.querySelector(".squ");
  var traingu = document.querySelector(".traingu");
  circ.style.border = "initial";
  squ.style.border = "initial";
  traingu.style.boxShadow = "0 4px orange";

  let a = 0;

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

    a += 1;
    if (a > 9) {
      a = 1;
    }
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
