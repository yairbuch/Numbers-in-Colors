export const mathButton = document.getElementById("mathButton");
export const Math = () => {
  localStorage.numb = "t";
  let table = document.getElementById("mytable");
  let row = table.insertRow(3);
  let plus = row.insertCell(0);
  let minus = row.insertCell(1);
  let equal = row.insertCell(2);
  const initialResult = document.getElementById("initialResult");
  const h1 = document.getElementById("h1");
  const tami = document.getElementById("tami");
  plus.style.fontSize = "50px";
  minus.style.fontSize = "50px";
  equal.style.fontSize = "50px";
  plus.style.color = "red";
  minus.style.color = "red";
  equal.style.color = "red";
  plus.innerHTML = "+";
  minus.innerHTML = "-";
  equal.innerHTML = "=";

  const writeEmojies = (emoji, number) => {
    if (h1.innerHTML[0] && h1.innerHTML[1] != "+" && !h1.innerHTML[2]) {
      alert("The game works with numbers between 1-9");
    } else {
      for (let i = 0; i < number; i++) {
        const txt = document.createTextNode(emoji);
        initialResult.appendChild(txt);
      }
      h1.textContent += number;
    }
  };

  a1.onclick = () => {
    writeEmojies("⚽", 1);
  };
  b2.onclick = () => {
    writeEmojies("🔮", 2);
  };
  c3.onclick = () => {
    writeEmojies("🍏", 3);
  };
  d4.onclick = () => {
    writeEmojies("🐷", 4);
  };
  e5.onclick = () => {
    writeEmojies("🏀", 5);
  };
  f6.onclick = () => {
    writeEmojies("🐸", 6);
  };
  g7.onclick = () => {
    writeEmojies("🌞", 7);
  };
  h8.onclick = () => {
    writeEmojies("🍅", 8);
  };
  i9.onclick = () => {
    writeEmojies("🧊", 9);
  };

  plus.onclick = function () {
    plus.style.border = "groove";
    minus.style.border = "initial";
    h1.textContent += "+";
    h1.style.color = "green";
  };

  minus.onclick = function () {
    minus.style.border = "groove";
    plus.style.border = "initial";
    h1.textContent += "-";
    h1.style.color = "red";

    const MinusAction = (number) => {
      h1.textContent += number;
      let initSecond = 0;

      for (let i = 0; i < number; i++) {
        initSecond = initSecond + 1000;

        setTimeout(() => {
          0;
          initialResult.removeChild(initialResult.lastChild);
        }, initSecond);
      }
    };

    a1.onclick = () => {
      MinusAction(1);
    };

    b2.onclick = () => {
      MinusAction(2);
    };

    c3.onclick = () => {
      MinusAction(3);
    };
    d4.onclick = () => {
      MinusAction(4);
    };

    e5.onclick = () => {
      MinusAction(5);
    };
    f6.onclick = () => {
      MinusAction(6);
    };

    g7.onclick = () => {
      MinusAction(7);
    };

    h8.onclick = () => {
      MinusAction(8);
    };

    i9.onclick = () => {
      MinusAction(9);
    };
  };

  equal.onclick = function () {
    equal.style.border = "groove";
    const val = document.createTextNode("=");
    h1.appendChild(val);

    const equalAction = (number) => {
      const val = document.createTextNode(number);

      h1.appendChild(val);

      if (h1.style.color === "green") {
        if (
          Number(h1.innerHTML[0]) + Number(h1.innerHTML[2]) ===
          Number(h1.innerHTML[4])
        ) {
          body.style.backgroundColor = "yellow";
          console.log(h1.innerHTML[2]);
          setTimeout(() => {
            document.location.reload();
          }, 2000);
        } else {
          alert("Try again");
          h1.removeChild(h1.lastChild);
        }
      } else if (h1.style.color === "red") {
        if (
          Number(h1.innerHTML[0]) - Number(h1.innerHTML[2]) ===
          Number(h1.innerHTML[4])
        ) {
          body.style.backgroundColor = "yellow";
          setTimeout(() => {
            document.location.reload();
          }, 2000);
        } else {
          alert("Try again");
          h1.removeChild(h1.lastChild);
        }
      }
    };
    a1.onclick = () => equalAction(1);
    b2.onclick = () => equalAction(2);
    c3.onclick = () => equalAction(3);
    d4.onclick = () => equalAction(4);
    e5.onclick = () => equalAction(5);
    f6.onclick = () => equalAction(6);
    g7.onclick = () => equalAction(7);
    h8.onclick = () => equalAction(8);
    i9.onclick = () => equalAction(9);
  };
};

mathButton.addEventListener("click", () => Math());
