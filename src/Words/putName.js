import { WritesNameToTable } from "./WriteNameToTable.js";

export const namesButton = document.getElementById("names");
export const speechFeedback = document.getElementById("speechFeedback");
export const putName = () => {
  localStorage.numb = "t";
  if (boxna.value === "") {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      namesButton.disabled = true;
      speechFeedback.textContent = "Listening...";

      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = "he";

      recognition.onresult = (event) => {
        const spokenWord = event.results[0][0].transcript;
        localStorage.name = spokenWord;
        if (spokenWord) {
          WritesNameToTable();
          speechFeedback.textContent = "";
        }
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };

      recognition.onend = () => {
        namesButton.disabled = false;
      };

      recognition.start();
    } else {
      speechFeedback.textContent =
        "Speech Recognition API is not supported in this browser.";
    }
  } else {
    localStorage.name = boxna.value;
    WritesNameToTable();
    boxna.value = "";
  }
};

namesButton.addEventListener("click", () => putName());
