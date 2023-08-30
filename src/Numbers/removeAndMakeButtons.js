export const numbButton = document.getElementById("numbers");

export const putNumber = () => {
  if (box.value === "!") {
    let randomNumb;

    do {
      randomNumb = Math.floor(Math.random() * 999) + 1;
    } while (randomNumb.toString().includes("0"));

    localStorage.numb = randomNumb;
    box.value = randomNumb;
    setTimeout(() => {
      box.value = "";
    }, 2500);
  } else if (box.value === ".") {
    const longDecimal = Math.random() * 0.8 + 0.1;
    const randomNumb = longDecimal.toFixed(1);
    localStorage.numb = randomNumb;
    box.value = randomNumb;
    setTimeout(() => {
      box.value = "";
    }, 1500);
  } else if (box.value === "") {
    const randomNumb = Math.floor(Math.random() * 9) + 1;
    localStorage.numb = randomNumb;
    box.value = randomNumb;
    setTimeout(() => {
      box.value = "";
    }, 2500);
  } else if (box.value === "push") {
    localStorage.numb = "push";
    box.value = "";
  }

  const GiveClue = (dollars, color) => {
    clue1.innerHTML = dollars;
    clue1.style.color = color;
    clue1.style.fontSize = "350%";
  };

  if (localStorage.numb == 1) {
    GiveClue("$", "rgb(50, 188, 243)");
  } else if (localStorage.numb == 2) {
    GiveClue("$$", "rgb(198, 40, 198)");
  } else if (localStorage.numb == 3) {
    GiveClue("$$$", "palegreen");
  } else if (localStorage.numb == 4) {
    GiveClue("$ $ $ <br/> $ ", "pink");
  } else if (localStorage.numb == 5) {
    GiveClue("$ $ $ <br/> $ $ ", "orange");
  } else if (localStorage.numb == 6) {
    GiveClue("$ $ $ <br/> $ $ $ ", "green");
  } else if (localStorage.numb == 7) {
    GiveClue("$ $ $ <br/> $ $ $ <br/> $", "gold");
  } else if (localStorage.numb == 8) {
    GiveClue("$ $ $ <br/> $ $ $ <br/> $ $", "firebrick");
  } else if (localStorage.numb == 9) {
    GiveClue("$ $ $ <br/> $ $ $ <br/> $ $ $", "aqua");
  }

  let button = document.createElement("BUTTON");
  let text = document.createTextNode("1");
  let button2 = document.createElement("BUTTON");
  let text2 = document.createTextNode("2");
  let button3 = document.createElement("BUTTON");
  let text3 = document.createTextNode("3");
  let button4 = document.createElement("BUTTON");
  let text4 = document.createTextNode("4");
  let button5 = document.createElement("BUTTON");
  let text5 = document.createTextNode("5");
  let button6 = document.createElement("BUTTON");
  let text6 = document.createTextNode("6");
  let button7 = document.createElement("BUTTON");
  let text7 = document.createTextNode("7");
  let button8 = document.createElement("BUTTON");
  let text8 = document.createTextNode("8");
  let button9 = document.createElement("BUTTON");
  let text9 = document.createTextNode("9");

  const newButtons = () => {
    button.appendChild(text);
    order.appendChild(button);
    button.style.backgroundColor = " rgb(50, 188, 243)";
    button.style.textAlign = "center";

    button2.appendChild(text2);
    order.appendChild(button2);
    button2.style.backgroundColor = "rgb(198, 40, 198)";
    button2.style.marginLeft = "13px";

    button3.appendChild(text3);
    order.appendChild(button3);
    button3.style.backgroundColor = "palegreen";
    button3.style.marginLeft = "13px";

    button4.appendChild(text4);
    order.appendChild(button4);
    button4.style.backgroundColor = "pink";
    button4.style.marginLeft = "13px";

    button5.appendChild(text5);
    order.appendChild(button5);
    button5.style.backgroundColor = "orange";
    button5.style.marginLeft = "13px";

    button6.appendChild(text6);
    order2.appendChild(button6);
    button6.style.backgroundColor = "green";
    button6.style.marginLeft = "13px";

    button7.appendChild(text7);
    order2.appendChild(button7);
    button7.style.backgroundColor = "gold";
    button7.style.marginLeft = "13px";

    button8.appendChild(text8);
    order2.appendChild(button8);
    button8.style.backgroundColor = "firebrick";
    button8.style.marginLeft = "13px";

    button9.appendChild(text9);
    order2.appendChild(button9);
    button9.style.backgroundColor = "aqua";
    button9.style.marginLeft = "13px";
  };

  const disappearNumb = (number) => {
    number.innerText = "";
    clue1.innerHTML = "";
  };

  const TrueNumClick = (number, value) => {
    number.innerText = value;
    number.style.border = "groove";
    body.style.backgroundColor = "yellow";
    setTimeout(() => {
      document.location.reload();
    }, 2000);
  };

  if (localStorage.numb == 0.1) {
    disappearNumb(a1);
    newButtons();

    button.onclick = () => TrueNumClick(a1, "1");
  } else if (localStorage.numb == 0.2) {
    disappearNumb(b2);

    newButtons();

    button2.onclick = () => TrueNumClick(b2, "2");
  } else if (localStorage.numb == 0.3) {
    disappearNumb(c3);

    newButtons();

    button3.onclick = () => TrueNumClick(c3, "3");
  } else if (localStorage.numb == 0.4) {
    disappearNumb(d4);
    newButtons();
    button4.onclick = () => TrueNumClick(d4, "4");
  } else if (localStorage.numb == 0.5) {
    disappearNumb(e5);

    newButtons();

    button5.onclick = () => TrueNumClick(e5, "5");
  } else if (localStorage.numb == 0.6) {
    disappearNumb(f6);

    newButtons();

    button6.onclick = () => TrueNumClick(f6, "6");
  } else if (localStorage.numb == 0.7) {
    disappearNumb(g7);
    newButtons();
    button7.onclick = () => TrueNumClick(g7, "7");
  } else if (localStorage.numb == 0.8) {
    disappearNumb(h8);

    newButtons();

    button8.onclick = () => TrueNumClick(h8, "8");
  } else if (localStorage.numb == 0.9) {
    disappearNumb(i9);
    newButtons();

    button9.onclick = () => TrueNumClick(i9, "9");
  }
};

numbButton.onclick = () => putNumber();
