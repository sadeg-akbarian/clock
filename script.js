function logTime() {
  const now = Date();
  const time = now.slice(16, 24);
  const hours = time.slice(0, 2);
  const minutes = time.slice(3, 5);
  const seconds = time.slice(-2);

  const hoursInDegree = parseInt(hours) * 30;
  const minutesInDegree = parseInt(minutes) * 6;
  const secondsInDegree = parseInt(seconds) * 6;

  const hoursPointer = document.querySelector("#hoursPointer");
  const minutesPointer = document.querySelector("#minutesPointer");
  const secondsPointer = document.querySelector("#secondsPointer");

  hoursPointer.style.transform = `translate(19.7vh, 8vh) rotate(${hoursInDegree}deg`;
  minutesPointer.style.transform = `translate(19.7vh, -11vh) rotate(${minutesInDegree}deg)`;
  secondsPointer.style.transform = `translate(19.87vh, -30vh) rotate(${secondsInDegree}deg)`;

  const digital = document.querySelector("#digital");

  if (parseInt(seconds) % 2 === 0) {
    const timeWithoutColon = time.replaceAll(":", " ");
    digital.innerText = timeWithoutColon;
  } else {
    digital.innerText = time;
  }
}

setInterval(logTime, 1000);
