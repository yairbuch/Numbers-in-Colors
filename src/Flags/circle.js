export const circle = () => {
  localStorage.numb = "t";
  var circ = document.querySelector(".circ");
  var squ = document.querySelector(".squ");
  var traingu = document.querySelector(".traingu");
  const countryName = document.getElementById("boxsh");
  circ.style.border = "groove";
  squ.style.border = "initial";
  traingu.style.boxShadow = "initial";

  let a = 0;

  const fillTheFlagCircle = (number) => {
    number.style.borderRadius = "50%";
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

    a += 1;
    if (a > 9) {
      a = 1;
    }
    if (a == 2) {
      number.style.backgroundColor = "blue";
    } else if (a == 3) {
      number.style.backgroundColor = "red";
    } else if (a == 4) {
      number.style.backgroundColor = "gold";
    } else if (a == 5) {
      number.style.backgroundColor = "green";
    } else if (a == 6) {
      number.style.backgroundColor = "purple";
    } else if (a == 7) {
      number.style.backgroundColor = "black";
    } else if (a == 8) {
      number.style.backgroundColor = "orange";
    } else if (a == 9) {
      number.style.backgroundColor = "royalblue";
    }

    if (countryName.value === "יפן") {
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
    }
  };

  a1.addEventListener("click", () => fillTheFlagCircle(a1));
  b2.addEventListener("click", () => fillTheFlagCircle(b2));
  c3.addEventListener("click", () => fillTheFlagCircle(c3));
  d4.addEventListener("click", () => fillTheFlagCircle(d4));
  e5.addEventListener("click", () => fillTheFlagCircle(e5));
  f6.addEventListener("click", () => fillTheFlagCircle(f6));
  g7.addEventListener("click", () => fillTheFlagCircle(g7));
  h8.addEventListener("click", () => fillTheFlagCircle(h8));
  i9.addEventListener("click", () => fillTheFlagCircle(i9));
};

circ.addEventListener("click", () => circle());
