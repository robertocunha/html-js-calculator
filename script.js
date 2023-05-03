let operationJustCompleted = false;
//Refer all buttons excluding equal (=), C and Bcksp 
let inputButtons = document.querySelectorAll("[data-value]");

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
    const precision = 8;
    input.value = math.format(solution, precision);
  } catch (err) {
    alert("Invalid Input");
    input.value = "";
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