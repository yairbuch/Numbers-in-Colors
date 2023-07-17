export const conicButton = document.getElementById("upp");
export const conicGradientLines = () => {
  localStorage.numb = "t";
  const countryName = document.getElementById("boxsh");
  let a = 0;

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

    a++;
    if (a > 7) {
      a = 1;
    }
    if (a == 1) {
      number.style.backgroundImage =
        "conic-gradient(white 180deg, red 180deg 270deg, white 270deg 360deg)";
      number.innerText = "1";
      number.style.fontSize = "1px";
    } else if (a == 2) {
      number.style.background = "white";
    } else if (a == 3) {
      number.style.backgroundImage = "conic-gradient(white 50%, red 50%)";
      number.innerText = "2";
      number.style.fontSize = "1px";
    } else if (a == 4) {
      number.style.backgroundImage =
        "conic-gradient(white 90deg, red 90deg 180deg, white 180deg 360deg)";
      number.innerText = "3";
      number.style.fontSize = "1px";
    } else if (a == 5) {
      number.style.backgroundImage = "conic-gradient(red 50%, white 50%)";
      number.innerText = "4";
      number.style.fontSize = "1px";
    } else if (a == 6) {
      number.style.backgroundImage =
        "conic-gradient(white 270deg, red 270deg 360deg)";
      number.innerText = "5";
      number.style.fontSize = "1px";
    } else if (a == 7) {
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
