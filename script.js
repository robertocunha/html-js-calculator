let operationJustCompleted = false;
//Refer all buttons excluding AC and DEL
let inputButtons = document.querySelectorAll(".input-button");
//Refer input,equal,clear and erase
let input = document.getElementById("input-id");
let equal = document.getElementById("equal-id");
let clear = document.getElementById("clear-id");
let erase = document.getElementById("erase-id");

window.onload = () => {
  input.value = "";
};

for (const button of inputButtons) {
  button.addEventListener("click", () => {
    if (operationJustCompleted === true) {
      input.value = "";
      operationJustCompleted = false;
    }
    
    input.value += button.dataset.value;
  });
} 

//Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
  operationJustCompleted = true;
  let inputValue = input.value;
  try {
    //evaluate user's input
    let solution = eval(inputValue);
    //True for natural numbers
    //false for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //If user has entered invalid input
    alert("Invalid Input");
  }
});

//Clear Whole Input
clear.addEventListener("click", () => {
  input.value = "";
});
//Erase Single Digit
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});