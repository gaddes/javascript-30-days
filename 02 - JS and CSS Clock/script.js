console.log("helloooo");

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // Update SECONDS
  const seconds = now.getSeconds();
  // Note: add 90 to account for the 90deg transform (rotate) in .html file line 66
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Update MINUTES
  const minutes = now.getMinutes();
  // Note: add 90 to account for the 90deg transform (rotate) in .html file line 66
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Update HOURS
  const hours = now.getHours();
  // Note: add 90 to account for the 90deg transform (rotate) in .html file line 66
  const hoursDegrees = ((hours / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);