const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function seeTime() {
const currentTime = new Date();
setTimeout(seeTime, 1000);
//console.log(currentTime);
const hour = currentTime.getHours();
console.log(hour);
const minute = currentTime.getMinutes();
const second = currentTime.getSeconds();

const hourDegree = (hour / 12) *360;
hourHand.style.transform = `rotate(${hourDegree}deg)`;
const minuteDegree = (minute / 60) *360;
minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
const secondDegree = (second / 60) *360;
secondHand.style.transform = `rotate(${secondDegree}deg)`;
}

seeTime();