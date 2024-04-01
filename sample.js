"use strict";

const changeMsg = document.querySelector(".initialStage");
// const checkButton = document.getElementById(".checkNumber");
const colorChangeBtn = document.querySelector("color-change-btn");
function checkNumber() {
  // Get the value entered by the user
  var number = document.getElementById("number").value;

  // Check if the input is empty or not a number
  if (number === "" || isNaN(number)) {
    alert("Please enter a valid number!");
    return;
  }

  // Convert the input to a number
  number = parseFloat(number);

  // Check if the number is positive, negative, or zero
  if (number > 0) {
    // changeMsg.textContent = `You Entered Number is ${number}`;
    //console.log(number);
    alert("The entered number is positive.");

    colorChangeBtn.style.backgroundColor = "green";
  } else if (number < 0) {
    alert("The entered number is negative.");
  } else {
    alert("The entered number is zero.");
  }
}
