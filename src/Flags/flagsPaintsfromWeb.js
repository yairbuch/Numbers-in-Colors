import { Flags } from "../services/domService.js";

export const flag = () => {
  localStorage.shape = boxsh.value;
  localStorage.numb = "t";

  if (localStorage.shape == "איטליה") {
    var italy = document.createElement("img");
    italy.src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/383px-Flag_of_Italy.svg.png";
    italy.setAttribute("height", 90);
    italy.setAttribute("width", 90);
    var mainHead = document.getElementById("mainHead");
    mainHead.appendChild(italy);
  } else if (localStorage.shape == "צרפת") {
    var french = document.createElement("img");
    french.src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/375px-Flag_of_France.svg.png";
    french.setAttribute("height", 90);
    french.setAttribute("width", 90);
    var mainHead = document.getElementById("mainHead");
    mainHead.appendChild(french);
  } else if (localStorage.shape == "ישראל") {
    var isfl = document.createElement("img");
    isfl.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/188px-Flag_of_Israel.svg.png";
    isfl.setAttribute("height", 90);
    isfl.setAttribute("width", 90);
    var fla = document.getElementById("mainHead");
    fla.appendChild(isfl);
    var Israel = document.createElement("img");
    Israel.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_of_David.svg/375px-Star_of_David.svg.png";
    e5.style.backgroundColor = "white";
    e5.style.borderRadius = 0;
    e5.innerText = "";
    Israel.setAttribute("height", 100);
    Israel.setAttribute("width", 100);
    var mainHead = document.querySelector(".e5");
    mainHead.appendChild(Israel);
  } else if (localStorage.shape == "ארגנטינה") {
    var arfl = document.createElement("img");
    arfl.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/383px-Flag_of_Argentina.svg.png";
    arfl.setAttribute("height", 100);
    arfl.setAttribute("width", 100);
    var flar = document.getElementById("mainHead");
    flar.appendChild(arfl);
    var argen = document.createElement("img");
    argen.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sol_de_Mayo-Bandera_de_Argentina.svg/180px-Sol_de_Mayo-Bandera_de_Argentina.svg.png";
    e5.style.backgroundColor = "white";
    e5.style.borderRadius = 0;
    e5.innerText = "";
    argen.setAttribute("height", 100);
    argen.setAttribute("width", 100);
    var mainHead = document.querySelector(".e5");
    mainHead.appendChild(argen);
  } else if (localStorage.shape == "גרמניה") {
    var german = document.createElement("img");
    german.src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png";
    german.setAttribute("height", 90);
    german.setAttribute("width", 90);
    var mainHead = document.getElementById("mainHead");
    mainHead.appendChild(german);
  } else if (localStorage.shape == "אנגליה") {
    var england = document.createElement("img");
    england.src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/383px-Flag_of_England.svg.png";
    england.setAttribute("height", 100);
    england.setAttribute("width", 100);
    var mainHead = document.getElementById("mainHead");
    mainHead.appendChild(england);
  } else if (localStorage.shape == "יפן") {
    var japan = document.createElement("img");
    japan.src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/383px-Flag_of_Japan.svg.png";
    japan.setAttribute("height", 100);
    japan.setAttribute("width", 100);
    var mainHead = document.getElementById("mainHead");
    mainHead.appendChild(japan);
  } else if (localStorage.shape == "אירלנד") {
    var erland = document.createElement("img");
    erland.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/383px-Flag_of_Ireland.svg.png";
    erland.setAttribute("height", 90);
    erland.setAttribute("width", 90);
    var mainHead = document.getElementById("mainHead");
    mainHead.appendChild(erland);
  } else if (localStorage.shape == "ארצות הברית") {
    var amrfl = document.createElement("img");
    amrfl.src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/383px-Flag_of_the_United_States.svg.png";
    amrfl.setAttribute("height", 100);
    amrfl.setAttribute("width", 100);
    var flam = document.getElementById("mainHead");
    flam.appendChild(amrfl);
    var argeni = document.createElement("img");
    argeni.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_rQQP2cK9p1jaq5cm1FAR5dqOmDjQqvddTiz4TGdwg&s";
    a1.innerText = "";
    argeni.setAttribute("height", 100);
    argeni.setAttribute("width", 100);
    var mainHead = document.querySelector(".a1");
    mainHead.appendChild(argeni);
  } else if (localStorage.shape == "קנדה") {
    var canfl = document.createElement("img");
    canfl.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/383px-Flag_of_Canada_%28Pantone%29.svg.png";
    canfl.setAttribute("height", 100);
    canfl.setAttribute("width", 170);
    var fla = document.getElementById("mainHead");
    fla.appendChild(canfl);
    var canada = document.createElement("img");
    canada.src =
      "data:image/png;base64,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";
    e5.style.backgroundColor = "white";
    e5.style.borderRadius = 0;
    e5.innerText = "";
    canada.setAttribute("height", 130);
    canada.setAttribute("width", 110);
    var mainHead = document.querySelector(".e5");
    mainHead.appendChild(canada);
  }
};

Flags.addEventListener("click", () => flag());
