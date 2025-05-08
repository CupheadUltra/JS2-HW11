// Завдання 1
let hourTimer = document.querySelector(".hour-timer");
let message = document.querySelector(".message");
let minutesLeft = 60;

let interval = setInterval(() => {
  minutesLeft--;
  let displayMinutes = minutesLeft.toString().padStart(2, "0");
  hourTimer.textContent = "Залишилось: " + displayMinutes + ":00";

  if (minutesLeft === 30) {
    message.textContent = "Залишилось менше половини часу!";
  }

  if (minutesLeft <= 0) {
    clearInterval(interval);
    hourTimer.textContent = "Час вичерпано";
  }
}, 60000);
// Завдання 2
let timerDisplay = document.querySelector(".second-timer");
let restartButton = document.querySelector("button");
let totalTime = 30000;
let start = 0;
let animationId = 0;

let startTimer = () => {
  start = performance.now();
  restartButton.disabled = true;
  timerDisplay.classList.remove("animate");

  let frame = () => {
    let now = performance.now();
    let timeLeft = Math.max(0, totalTime - (now - start));
    let seconds = (timeLeft / 1000).toFixed(3);

    timerDisplay.textContent = "Залишилось: " + seconds + " с";

    if (timeLeft <= 10000) {
      timerDisplay.classList.add("animate");
    }

    if (timeLeft > 0) {
      animationId = requestAnimationFrame(frame);
    } else {
      timerDisplay.textContent = "Час вичерпано";
      restartButton.disabled = false;
    }
  };

  cancelAnimationFrame(animationId);
  requestAnimationFrame(frame);
};

restartButton.addEventListener("click", startTimer);

startTimer();
