export const lineses = document.getElementById("lineses");
export const lines = () => {
  localStorage.numb = "t";
  a1.style.marginRight = 0;
  const countryName = document.getElementById("boxsh");
  let a = 0;

  const fillTheFlagLines = (number) => {
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
    a += 1;
    if (a > 3) {
      a = 1;
    }
    if (a == 1) {
      number.style.borderRadius = 0;
      number.style.background =
        "linear-gradient(white 25%, blue 25% 75%, white 75% 100%)";
      number.innerText = "";
    } else if (a == 2) {
      number.style.borderRadius = 0;
      number.style.background =
        "linear-gradient(white 25%, red 25% 50%, white 50% 75%, red 75% 100%)";
      number.innerText = "";
    } else if (a == 3) {
      number.style.borderRadius = 0;
      number.style.background = "white";
      number.innerText = "";
    }

    if (countryName.value === "ארצות הברית") {
      if (
        b2.style.background === c3.style.background &&
        b2.style.background === d4.style.background &&
        b2.style.background === e5.style.background &&
        b2.style.background === f6.style.background &&
        b2.style.background === g7.style.background &&
        b2.style.background === h8.style.background &&
        b2.style.background === i9.style.background
      ) {
        body.style.backgroundColor = "yellow";
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    } else if (countryName.value === "ישראל") {
      if (
        a1.style.background === b2.style.background &&
        b2.style.background === c3.style.background &&
        c3.style.background === a1.style.background &&
        d4.style.background === "white" &&
        f6.style.background === "white" &&
        g7.style.background === a1.style.background &&
        h8.style.background === a1.style.background &&
        i9.style.background === a1.style.background
      ) {
        body.style.backgroundColor = "yellow";
        setTimeout(() => {
          document.location.reload();
        }, 2000);
      }
    }
  };

  a1.addEventListener("click", () => fillTheFlagLines(a1));
  b2.addEventListener("click", () => fillTheFlagLines(b2));
  c3.addEventListener("click", () => fillTheFlagLines(c3));
  d4.addEventListener("click", () => fillTheFlagLines(d4));
  e5.addEventListener("click", () => fillTheFlagLines(e5));
  f6.addEventListener("click", () => fillTheFlagLines(f6));
  g7.addEventListener("click", () => fillTheFlagLines(g7));
  h8.addEventListener("click", () => fillTheFlagLines(h8));
  i9.addEventListener("click", () => fillTheFlagLines(i9));
};

lineses.addEventListener("click", () => lines());
