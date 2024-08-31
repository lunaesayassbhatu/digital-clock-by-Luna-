const time = document.querySelector(".time");
const day = document.querySelector("#day");
const date = document.querySelector(".date");
let hourformat24 = true;
let period;
function update() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let min = now.getMinutes().toString().padStart(2, "0");
  let sec = now.getSeconds().toString().padStart(2, "0");
  let dayName = days[now.getDay()];
  let dateNumber = now.getDate();
  let year = now.getFullYear();
  let month = now.getMonth().toString().padStart(2, "0");
  day.innerText = `${dayName},`;
  date.innerHTML = `${month}/${dateNumber}/${year}`;
  period = hours >= 12 ? "PM" : "AM";
  if (hourformat24) {
    time.innerHTML = `${hours}: ${min}: ${sec} :${period}`;
  } else {
    period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    time.innerHTML = `${hours}: ${min}: ${sec} :${period}`;
  }
}
function convert() {
  hourformat24 = !hourformat24;
  update();
}
update();
setInterval(() => {
  update();
}, 1000);