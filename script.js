let operationJustCompleted = false;
//Refer all buttons excluding equal (=), C and Bcksp 
let inputButtons = document.querySelectorAll(".input-button");

let input = document.getElementById("input-id");
let equal = document.getElementById("equal-id");
let clear = document.getElementById("clear-id");
let bcksp = document.getElementById("bcksp-id");

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
    let solution = math.evaluate(inputValue);
    
    input.value = solution.toFixed(8).replace(/\.?0+$/, '');
  } catch (err) {
    alert("Invalid Input");
  }
});

//Clear Whole Input
clear.addEventListener("click", () => {
  input.value = "";
});
//Erase Single Digit
bcksp.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});