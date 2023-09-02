import { table } from "../services/domService.js";

export const WritesNameToTable = () => {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const inputString = localStorage.name || "";

  const positions = ["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8", "i9"];

  const assignedLetters = {};

  function assignLetter(index, letter) {
    if (!assignedLetters[letter]) {
      assignedLetters[letter] = true;
      table.querySelector(`#${positions[index]}`).innerText = letter;
    } else {
      table.querySelector(`#${positions[index]}`).innerText = " ";
    }
  }
  shuffleArray(positions);

  for (let i = 0; i < inputString.length && i < positions.length; i++) {
    assignLetter(i, inputString[i]);
  }

  for (let i = inputString.length; i < positions.length; i++) {
    table.querySelector(`#${positions[i]}`).innerText = " ";
  }
  mainHead.innerHTML = localStorage.name;

  const buildname = (number, textNode) => {
    const initialResult = document.getElementById("initialResult");

    if (
      initialResult.innerHTML.length === 0 &&
      number.innerText !== localStorage.name[0]
    ) {
      initialResult.innerHTML = "";
    } else if (
      initialResult.innerHTML.length === 1 &&
      number.innerText !== localStorage.name[1]
    ) {
      initialResult.innerHTML += "";
    } else if (
      initialResult.innerHTML.length === 2 &&
      number.innerText !== localStorage.name[2]
    ) {
      initialResult.innerHTML += "";
    } else if (
      initialResult.innerHTML.length === 3 &&
      number.innerText !== localStorage.name[3]
    ) {
      initialResult.innerHTML += "";
    } else if (
      initialResult.innerHTML.length === 4 &&
      number.innerText !== localStorage.name[4]
    ) {
      initialResult.innerHTML += "";
    } else if (
      initialResult.innerHTML.length === 5 &&
      number.innerText !== localStorage.name[5]
    ) {
      initialResult.innerHTML += "";
    } else if (
      initialResult.innerHTML.length === 6 &&
      number.innerText !== localStorage.name[6]
    ) {
      initialResult.innerHTML += "";
    } else if (
      initialResult.innerHTML.length === 7 &&
      number.innerText !== localStorage.name[7]
    ) {
      initialResult.innerHTML += "";
    } else if (
      initialResult.innerHTML.length === 8 &&
      number.innerText !== localStorage.name[8]
    ) {
      initialResult.innerHTML += "";
    } else {
      initialResult.appendChild(textNode);
    }

    if (initialResult.innerHTML == mainHead.innerHTML) {
      initialResult.style.color = "Blue";
      mainHead.style.color = "Blue";
      mainHead.style.fontSize = "50px";
      body.style.backgroundColor = "yellow";
      setTimeout(() => {
        document.location.reload();
      }, 4000);
    }
  };

  a1.onclick = () => buildname(a1, document.createTextNode(a1.innerText));
  b2.onclick = () => buildname(b2, document.createTextNode(b2.innerText));
  c3.onclick = () => buildname(c3, document.createTextNode(c3.innerText));
  d4.onclick = () => buildname(d4, document.createTextNode(d4.innerText));
  e5.onclick = () => buildname(e5, document.createTextNode(e5.innerText));
  f6.onclick = () => buildname(f6, document.createTextNode(f6.innerText));
  g7.onclick = () => buildname(g7, document.createTextNode(g7.innerText));
  h8.onclick = () => buildname(h8, document.createTextNode(h8.innerText));
  i9.onclick = () => buildname(i9, document.createTextNode(i9.innerText));
};
