let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function start() {
  document.getElementById("start").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("reset").disabled = false;
  timer = setInterval(updateTime, 1000);
}

function pause() {
  clearInterval(timer);
  document.getElementById("pause").textContent = "Continue";
  document.getElementById("pause").onclick = resume;
}

function resume() {
  document.getElementById("pause").textContent = "Pause";
  document.getElementById("pause").onclick = pause;
  timer = setInterval(updateTime, 1000);
}

function stop() {
  clearInterval(timer);
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("reset").disabled = true;
  document.getElementById("pause").textContent = "Pause";
  document.getElementById("pause").onclick = pause;
  document.getElementById("time").textContent = "00 : 00 : 00";
  hours = 0;
  minutes = 0;
  seconds = 0;
}

function updateTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  const formattedTime =
    pad(hours) + " : " + pad(minutes) + " : " + pad(seconds);
  document.getElementById("time").textContent = formattedTime;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}
