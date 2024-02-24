import { boxna, namesButton } from "../services/domService.js";
import { searchAndDisplayImages } from "./ImageOfSpokenWord.js";
import { WritesNameToTable } from "./WriteNameToTable.js";

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
          searchAndDisplayImages(spokenWord);
        }
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        speechFeedback.textContent = `Speech error`;
        setTimeout(() => {
          document.location.reload();
        }, 2000);
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
