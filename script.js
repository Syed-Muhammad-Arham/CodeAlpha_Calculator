const display = document.getElementById("display");
function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    setTimeout(() => clearDisplay(), 1500);
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (
    (key >= "0" && key <= "9") ||
    key === "." ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/"
  ) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
