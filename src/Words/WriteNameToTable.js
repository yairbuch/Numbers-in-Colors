import { boxna, boxnaValue, table } from "../services/domService.js";
import { animateCircles } from "./ImageOfSpokenWord.js";

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

  let limitedString = "";

  console.log(assignedLetters);

  function assignLetter(index, letter) {
    console.log(letter);
    if (!assignedLetters[letter]) {
      assignedLetters[letter] = true;
      table.querySelector(`#${positions[index]}`).innerText = letter;
    } else {
      table.querySelector(`#${positions[index]}`).innerText = " ";
    }
  }

  shuffleArray(positions);

  for (let i = 0; i < inputString.length; i++) {
    const element = inputString[i];
    if (!limitedString.includes(element)) {
      limitedString = limitedString.concat(element);
    }
  }

  if (inputString.length > 9) {
    alert("You choosed too long word..");
    document.location.reload();
  }

  for (let i = 0; i < limitedString.length && i < positions.length; i++) {
    assignLetter(i, limitedString[i]);
  }

  for (let i = limitedString.length; i < positions.length; i++) {
    table.querySelector(`#${positions[i]}`).innerText = " ";
  }

  mainHead.innerHTML = localStorage.name;

  const buildname = (number, textNode) => {
    const initialResult = document.getElementById("initialResult");
    const name = localStorage.name;
    const currentIndex = initialResult.innerHTML.length;

    if (number.innerText === "" && name[currentIndex] === " ") {
      initialResult.innerHTML += " ";
    } else {
      if (
        currentIndex < name.length &&
        number.innerText === name[currentIndex]
      ) {
        initialResult.appendChild(textNode);
      }
    }

    if (initialResult.innerHTML == mainHead.innerHTML) {
      initialResult.style.color = "Blue";
      mainHead.style.color = "Blue";
      mainHead.style.fontSize = "50px";
      body.style.backgroundColor = "yellow";
      animateCircles();
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
