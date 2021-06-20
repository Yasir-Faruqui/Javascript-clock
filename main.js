'use strict'

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date(); //New object with current date and time.
  const seconds = now.getSeconds(); //This method returns the seconds (from 0 to 59) of the specified date and time.
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

//Same procedure repeated for minutes....
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`

  //Same procedure repeated for hours....
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

}
setInterval(setDate, 1000); //This method will keep calling the setDate funciton after every 1 second.
