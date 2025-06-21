const landingAha = document.querySelector("#aha-landing-page");

const promptCounter = document.getElementById("prompt-counter");

const title = document.getElementById("title");

const userInputBar = document.querySelector("#user-input-bar");

promptCounter.classList.add("hidden");

// landingAha.addEventListener("click");

function handleInput() {
  const userInput = document.getElementById("user-input-bar").value;

  console.log(userInput);

  document.getElementById("user-input-bar").value = "";

  title.classList.add("fade-out");

  landingAha.classList.add("move-aha-bottom-right");

  userInputBar.classList.add("user-input-bar-top");
}

window.addEventListener("keydown", (event) => {
  const userInput = document.getElementById("user-input-bar").value;

  if (event.key === "Enter" && userInput.trim() !== "") {
    handleInput();

    promptCounter.classList.remove("hidden");

    promptCounter.classList.add("fade-in");
  }
});
