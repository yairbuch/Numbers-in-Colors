import { headButton } from "../services/domService.js";

let isClicked = false;
const a = [a1.style.backgroundColor, a1.innerText, a1.style.border];
const b = [b2.style.backgroundColor, b2.innerText, b2.style.border];
const c = [c3.style.backgroundColor, c3.innerText, c3.style.border];
const d = [d4.style.backgroundColor, d4.innerText, d4.style.border];
const e = [e5.style.backgroundColor, e5.innerText, e5.style.border];
const f = [f6.style.backgroundColor, f6.innerText, f6.style.border];
const g = [g7.style.backgroundColor, g7.innerText, g7.style.border];
const h = [h8.style.backgroundColor, h8.innerText, h8.style.border];
const i = [i9.style.backgroundColor, i9.innerText, i9.style.border];

const paintToWhiteInnerFunc = (number, color, text, border) => {
  number.style.backgroundColor = color;
  number.innerText = text;
  number.style.border = border;
};
export const PaintToWhite = () => {
  isClicked = !isClicked;
  if (isClicked) {
    paintToWhiteInnerFunc(a1, "initial", "", "groove");
    paintToWhiteInnerFunc(b2, "initial", "", "groove");
    paintToWhiteInnerFunc(c3, "initial", "", "groove");
    paintToWhiteInnerFunc(d4, "initial", "", "groove");
    paintToWhiteInnerFunc(e5, "initial", "", "groove");
    paintToWhiteInnerFunc(f6, "initial", "", "groove");
    paintToWhiteInnerFunc(g7, "initial", "", "groove");
    paintToWhiteInnerFunc(h8, "initial", "", "groove");
    paintToWhiteInnerFunc(i9, "initial", "", "groove");
  } else {
    paintToWhiteInnerFunc(a1, a[0], a[1], a[2]);
    paintToWhiteInnerFunc(b2, b[0], b[1], b[2]);
    paintToWhiteInnerFunc(c3, c[0], c[1], c[2]);
    paintToWhiteInnerFunc(d4, d[0], d[1], d[2]);
    paintToWhiteInnerFunc(e5, e[0], e[1], e[2]);
    paintToWhiteInnerFunc(f6, f[0], f[1], f[2]);
    paintToWhiteInnerFunc(g7, g[0], g[1], g[2]);
    paintToWhiteInnerFunc(h8, h[0], h[1], h[2]);
    paintToWhiteInnerFunc(i9, i[0], i[1], i[2]);
  }
};

headButton.addEventListener("click", () => PaintToWhite());
