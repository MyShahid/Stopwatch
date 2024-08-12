const time = document.getElementById("countDown");
const displayValue = document.querySelector(".displayValue");

let startCount = 0;
let intervalId = null;

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const startTimer = () => {
    if (intervalId !== null) return;

    time.innerText = formatTime(startCount);
    intervalId = setInterval(() => {
        time.innerText = formatTime(startCount++);
    }, 1000);

    startCount++;
    time.innerText = formatTime(startCount - 1);
};

const stopTime = () => {
    clearInterval(intervalId);
    intervalId = null;
};

const resetTimer = () => {
    startCount = 0;
    time.innerText = formatTime(startCount);
    clearInterval(intervalId);
    intervalId = null;
};

const showStopValue = () => {
    if (startCount >= 1) {
        const newP = document.createElement("p");
        newP.innerText = `The get time is ${formatTime(startCount - 1)}`;
        displayValue.appendChild(newP);
    }
};

const clearTimeValue = () => {
    displayValue.innerHTML = '';
};

document.querySelector(".start-btn").addEventListener("click", startTimer);
document.querySelector(".stop-btn").addEventListener("click", stopTime);
document.querySelector(".time-btn").addEventListener("click", showStopValue);
document.querySelector(".reset-btn").addEventListener("click", resetTimer);
document.querySelector(".clear-btn").addEventListener("click", clearTimeValue);

