import { musicButton, boxna } from "../services/domService.js";

export const music = async () => {
  if (boxna.value == "abc") {
    boxna.style.backgroundColor = "red";
    0;
    const timeout = setTimeout(() => {
      a1.style.color = "white";
      a1.innerText = "A";
    }, 1100);
    const timeout1 = setTimeout(() => {
      a1.style.color = "black";
      a1.innerText = "1";
    }, 2200);
    const timeout2 = setTimeout(() => {
      a1.style.color = "white";
      a1.innerText = "B";
    }, 3300);
    const timeout3 = setTimeout(() => {
      a1.style.color = "black";
      a1.innerText = "1";
    }, 4400);
    const timeout4 = setTimeout(() => {
      e5.style.color = "white";
      e5.innerText = "C";
    }, 5500);
    const timeout5 = setTimeout(() => {
      e5.style.color = "black";
      e5.innerText = "5";
    }, 6600);
    const timeout6 = setTimeout(() => {
      e5.style.color = "white";
      e5.innerText = "D";
    }, 7700);
    const timeout7 = setTimeout(() => {
      e5.style.color = "black";
      e5.innerText = "5";
    }, 8800);
    const timeout8 = setTimeout(() => {
      f6.style.color = "white";
      f6.innerText = "E";
    }, 9900);
    const timeout9 = setTimeout(() => {
      f6.style.color = "black";
      f6.innerText = "6";
    }, 11000);
    const timeout10 = setTimeout(() => {
      f6.style.color = "white";
      f6.innerText = "F";
    }, 12100);
    const timeout11 = setTimeout(() => {
      f6.style.color = "black";
      f6.innerText = "6";
    }, 13200);
    const timeout12 = setTimeout(() => {
      e5.style.color = "white";
      e5.innerText = "G";
    }, 14300);
    const timeout13 = setTimeout(() => {
      e5.style.color = "black";
      e5.innerText = "5";
    }, 15400);
    const timeout14 = setTimeout(() => {
      d4.style.color = "white";
      d4.innerText = "H";
    }, 16500);
    const timeout15 = setTimeout(() => {
      d4.style.color = "black";
      d4.innerText = "4";
    }, 17600);
    const timeout16 = setTimeout(() => {
      d4.style.color = "white";
      d4.innerText = "I";
    }, 18700);
    const timeout17 = setTimeout(() => {
      d4.style.color = "black";
      d4.innerText = "4";
    }, 19800);
    const timeout18 = setTimeout(() => {
      c3.style.color = "white";
      c3.innerText = "J";
    }, 20900);
    const timeout19 = setTimeout(() => {
      c3.style.color = "black";
      c3.innerText = "3";
    }, 22000);
    const timeout20 = setTimeout(() => {
      c3.style.color = "white";
      c3.innerText = "K";
    }, 23100);
    const timeout21 = setTimeout(() => {
      c3.style.color = "black";
      c3.innerText = "3";
    }, 24200);
    const timeout22 = setTimeout(() => {
      b2.style.color = "white";
      b2.innerText = "L";
    }, 25300);
    const timeout22b = setTimeout(() => {
      b2.style.color = "black";
      b2.innerText = "2";
    }, 26400);
    const timeout23 = setTimeout(() => {
      b2.style.color = "white";
      b2.innerText = "M";
    }, 27500);
    const timeout23b = setTimeout(() => {
      b2.style.color = "black";
      b2.innerText = "2";
    }, 28600);
    const timeout24 = setTimeout(() => {
      b2.style.color = "white";
      b2.innerText = "N";
    }, 29700);
    const timeout24b = setTimeout(() => {
      b2.style.color = "black";
      b2.innerText = "2";
    }, 30800);
    const timeout25 = setTimeout(() => {
      b2.style.color = "white";
      b2.innerText = "O";
    }, 31900);
    const timeout25b = setTimeout(() => {
      b2.style.color = "black";
      b2.innerText = "2";
    }, 33000);
    const timeout26 = setTimeout(() => {
      a1.style.color = "white";
      a1.innerText = "P";
    }, 34100);
    const timeout26b = setTimeout(() => {
      a1.style.color = "black";
      a1.innerText = "1";
    }, 35200);
  }

  a1.onclick = function () {
    const doNote = new Audio("../sounds/do.wav");
    doNote.play();
  };
  e5.onclick = function () {
    const solNote = new Audio("../sounds/sol.wav");
    solNote.play();
  };
  f6.onclick = function () {
    const laNote = new Audio("../sounds/la.wav");
    laNote.play();
  };
  d4.onclick = function () {
    const faNote = new Audio("../sounds/fa.wav");
    faNote.play();
  };
  c3.onclick = function () {
    const miNote = new Audio("../sounds/mi.wav");
    miNote.play();
  };
  b2.onclick = function () {
    const reNote = new Audio("../sounds/re.wav");
    reNote.play();
  };
  g7.onclick = function () {
    const siNote = new Audio("../sounds/si.m4a");
    siNote.play();
  };
  h8.onclick = function () {
    const octave = new Audio("../sounds/octave.wav");
    octave.play();
  };
};

musicButton.addEventListener("click", () => music());
