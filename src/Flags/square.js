export const square = () => {
  localStorage.numb = "t";
  var squ = document.querySelector(".squ");
  var circ = document.querySelector(".circ");
  var traingu = document.querySelector(".traingu");
  const countryName = document.getElementById("boxsh");
  squ.style.border = "groove";
  circ.style.border = "initial";
  traingu.style.boxShadow = "initial";

  let initNumb = 0;
  let pressTimer;

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

    clearTimeout(pressTimer);

    initNumb += 1;
    if (initNumb > 9) {
      initNumb = 1;
    }

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

  const FillTheFlagSquareBack = (number) => {
    pressTimer = setTimeout(() => {
      initNumb = initNumb - 2;
      if (initNumb < 0) {
        initNumb = 8;
      }

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
      }
    }, 300);

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

  const endPress = () => {
    clearTimeout(pressTimer);
  };

  a1.addEventListener("click", () => FillTheFlagSquare(a1));
  a1.addEventListener("mousedown", () => FillTheFlagSquareBack(a1));
  a1.addEventListener("mouseup", endPress);
  a1.addEventListener("touchstart", () => FillTheFlagSquareBack(a1));
  a1.addEventListener("touchend", endPress);

  b2.addEventListener("click", () => FillTheFlagSquare(b2));
  b2.addEventListener("mousedown", () => FillTheFlagSquareBack(b2));
  b2.addEventListener("mouseup", endPress);
  b2.addEventListener("touchstart", () => FillTheFlagSquareBack(b2));
  b2.addEventListener("touchend", endPress);

  c3.addEventListener("click", () => FillTheFlagSquare(c3));
  c3.addEventListener("mousedown", () => FillTheFlagSquareBack(c3));
  c3.addEventListener("mouseup", endPress);
  c3.addEventListener("touchstart", () => FillTheFlagSquareBack(c3));
  c3.addEventListener("touchend", endPress);

  d4.addEventListener("click", () => FillTheFlagSquare(d4));
  d4.addEventListener("mousedown", () => FillTheFlagSquareBack(d4));
  d4.addEventListener("mouseup", endPress);
  d4.addEventListener("touchstart", () => FillTheFlagSquareBack(d4));
  d4.addEventListener("touchend", endPress);

  e5.addEventListener("click", () => FillTheFlagSquare(e5));
  e5.addEventListener("mousedown", () => FillTheFlagSquareBack(e5));
  e5.addEventListener("mouseup", endPress);
  e5.addEventListener("touchstart", () => FillTheFlagSquareBack(e5));
  e5.addEventListener("touchend", endPress);

  f6.addEventListener("click", () => FillTheFlagSquare(f6));
  f6.addEventListener("mousedown", () => FillTheFlagSquareBack(f6));
  f6.addEventListener("mouseup", endPress);
  f6.addEventListener("touchstart", () => FillTheFlagSquareBack(f6));
  f6.addEventListener("touchend", endPress);

  g7.addEventListener("click", () => FillTheFlagSquare(g7));
  g7.addEventListener("mousedown", () => FillTheFlagSquareBack(g7));
  g7.addEventListener("mouseup", endPress);
  g7.addEventListener("touchstart", () => FillTheFlagSquareBack(g7));
  g7.addEventListener("touchend", endPress);

  h8.addEventListener("click", () => FillTheFlagSquare(h8));
  h8.addEventListener("mousedown", () => FillTheFlagSquareBack(h8));
  h8.addEventListener("mouseup", endPress);
  h8.addEventListener("touchstart", () => FillTheFlagSquareBack(h8));
  h8.addEventListener("touchend", endPress);

  i9.addEventListener("click", () => FillTheFlagSquare(i9));
  i9.addEventListener("mousedown", () => FillTheFlagSquareBack(i9));
  i9.addEventListener("mouseup", endPress);
  i9.addEventListener("touchstart", () => FillTheFlagSquareBack(i9));
  i9.addEventListener("touchend", endPress);
};

squ.addEventListener("click", () => square());
