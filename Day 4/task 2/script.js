// Thursday, 19th of October 2023
// extension: Create a live digital clock (hh:mm:ss)

let date1 = new Date(2023, 9, 19);
console.log(`${date1.toLocaleDateString('en-EN', { weekday: 'long' })}, ${date1.getDate()}th of ${date1.toLocaleDateString('en-EN', { month: 'long' })} ${date1.getFullYear()}`);



const clock = document.getElementById('clock');

let updateInterval = setInterval(updateTime, 100);

function updateTime() {
  let currentDate = new Date();
  currentHour = currentDate.getHours();
  currentMinute = currentDate.getMinutes();
  currentSecond = currentDate.getSeconds();

  if (String(currentHour).length < 2) {
    currentHour = "0" + String(currentHour);
  }

  if (String(currentMinute).length < 2) {
    currentMinute = "0" + String(currentMinute);
  }

  if (String(currentSecond).length < 2) {
    currentSecond = "0" + String(currentSecond);
  }

  clock.innerText = `Current Time: ${currentHour}:${currentMinute}:${currentSecond}`;
}

// simple timer with start and stop and reset

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const timer = document.getElementById('timer');


timer.innerText = "00:00:00:00";

let date = new Date();
let previousTime = date.getTime();
let timeElapsed = 0;
let currentTimerTime = 0;

let timerInterval;
let displayTimerInterval;

let isFirstStart = true;

function addTimeElapsed() {
  date = new Date();
  let currentTime = date.getTime();

  timeElapsed = currentTime - previousTime;
  currentTimerTime += timeElapsed;

  previousTime = currentTime;
}

function displayCurrentTimerTime() {
  let milliseconds = Math.floor((currentTimerTime % 1000) / 10);
  let seconds = Math.floor((currentTimerTime / 1000) % 60);
  let minutes = Math.floor((currentTimerTime / (1000 * 60)) % 60);
  let hours = Math.floor((currentTimerTime / (1000 * 60 * 60)) % 24);

  switch (true) {
    case (milliseconds < 10):
      milliseconds = "0" + milliseconds;
      break;
  }

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  timer.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function startTimer() {
  if (!isFirstStart) {
    clearInterval(timerInterval);
    clearInterval(displayTimerInterval);
  }
  else {
    isFirstStart = false;
  }
  date = new Date();
  previousTime = date.getTime();
  timerInterval = setInterval(addTimeElapsed, 1);
  displayTimerInterval = setInterval(displayCurrentTimerTime, 1);
}

function stopTimer() {
  clearInterval(timerInterval);
  clearInterval(displayTimerInterval);
  timeElapsed = 0;
}

function resetTimer() {
  clearInterval(timerInterval);
  clearInterval(displayTimerInterval);
  timeElapsed = 0;
  currentTimerTime = 0;
  timer.innerText = "00:00:00:00";
  isFirstStart = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);