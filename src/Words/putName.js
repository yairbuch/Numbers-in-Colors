export const namesButton = document.getElementById("names");
export const putName = () => {
  localStorage.numb = "t";
  localStorage.name = boxna.value;
  a1.innerText = localStorage.name[0] || "ס";
  b2.innerText = localStorage.name[8] || "מ";
  c3.innerText = localStorage.name[3] || "ג";
  d4.innerText = localStorage.name[4] || "ש";
  e5.innerText = localStorage.name[2] || "פ";
  f6.innerText = localStorage.name[6] || "ק";
  g7.innerText = localStorage.name[1] || "צ";
  h8.innerText = localStorage.name[5] || "ל";
  i9.innerText = localStorage.name[7] || "כ";
  a1.style.backgroundColor = "initial";
  b2.style.backgroundColor = "initial";
  c3.style.backgroundColor = "initial";
  d4.style.backgroundColor = "initial";
  e5.style.backgroundColor = "initial";
  f6.style.backgroundColor = "initial";
  g7.style.backgroundColor = "initial";
  h8.style.backgroundColor = "initial";
  i9.style.backgroundColor = "initial";
  a1.style.color = "rgb(50, 188, 243)";
  b2.style.color = "purple";
  c3.style.color = "palegreen";
  d4.style.color = "pink";
  e5.style.color = "orange";
  f6.style.color = "green";
  g7.style.color = "gold";
  h8.style.color = "firebrick";
  i9.style.color = "aqua";

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

  a1.onclick = () =>
    buildname(a1, document.createTextNode(localStorage.name[0] || "ס"));
  b2.onclick = () =>
    buildname(b2, document.createTextNode(localStorage.name[8] || "כ"));
  c3.onclick = () =>
    buildname(c3, document.createTextNode(localStorage.name[3] || "ג"));
  d4.onclick = () =>
    buildname(d4, document.createTextNode(localStorage.name[4] || "ש"));
  e5.onclick = () =>
    buildname(e5, document.createTextNode(localStorage.name[2] || "פ"));
  f6.onclick = () =>
    buildname(f6, document.createTextNode(localStorage.name[6] || "ק"));
  g7.onclick = () =>
    buildname(g7, document.createTextNode(localStorage.name[1] || "צ"));
  h8.onclick = () =>
    buildname(h8, document.createTextNode(localStorage.name[5] || "ל"));
  i9.onclick = () =>
    buildname(i9, document.createTextNode(localStorage.name[7] || "מ"));
};

namesButton.addEventListener("click", () => putName());
