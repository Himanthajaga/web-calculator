function appendToDisplay(value) {
  const display = document.getElementById("display");
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Function to clear display
function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

// Function to calculate and display the result
function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}
