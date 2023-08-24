function logTime() {
  const now = Date();
  const time = now.slice(16, 24);

  const seconds = time.slice(-2);
  const minutes = time.slice(3, 5);
  const hours = time.slice(0, 2);

  const secondsInDegree = parseInt(seconds) * 6;
  const exactMinutes = parseInt(minutes) + parseInt(seconds) / 60;
  const minutesInDegree = exactMinutes * 6;
  const exactHours = parseInt(hours) + exactMinutes / 60;
  const hoursInDegree = exactHours * 30;

  const secondsPointer = document.querySelector("#secondsPointer");
  const minutesPointer = document.querySelector("#minutesPointer");
  const hoursPointer = document.querySelector("#hoursPointer");

  secondsPointer.style.transform = `translate(19.87vh, -30vh) rotate(${secondsInDegree}deg)`;
  minutesPointer.style.transform = `translate(19.7vh, -11vh) rotate(${minutesInDegree}deg)`;
  hoursPointer.style.transform = `translate(19.7vh, 8vh) rotate(${hoursInDegree}deg`;

  const digital = document.querySelector("#digital");

  if (parseInt(seconds) % 2 === 0) {
    const timeWithoutColon = time.replaceAll(":", " ");
    digital.innerText = timeWithoutColon;
  } else {
    digital.innerText = time;
  }
}

setInterval(logTime, 1000);
