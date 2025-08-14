window.onload = function () {
  let display = document.getElementById("display");
  let history = document.getElementById("history");
  let buttons = document.getElementsByTagName("button");

  let currentInput = "";
  let afterEqual = false;

  //click on buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      let value = this.innerHTML;
      calculator(value);
    };
  }
  //keyboard key presses
  document.addEventListener("keydown", function (event) {
    let value = null;
    switch (event.key) {
      case "Enter":
        value = "=";
        break;
      case "Backspace":
        value = "←";
        break;
      case "c":
      case "C":
        value = "C";
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "+":
      case "-":
      case "*":
      case "/":
      case ".":
        value = event.key;
        break;
    }
    if (value !== null) calculator(value);
  });

  // calculator function :
  function calculator(value) {
    if (value === "=") {
      history.innerHTML = currentInput + " =";
      // Remove the last character if it's an operator before evaluating :
      let lastChar = currentInput[currentInput.length - 1];
      if (isNaN(lastChar)) {
        currentInput = currentInput.slice(0, -1);
      }
      currentInput = eval(currentInput).toString();
      afterEqual = true;
    } else if (value === "C") {
      currentInput = "";
      display.innerHTML = "";
      history.innerHTML = "";
      afterEqual = false;
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
    } else {
      if (afterEqual) {
        currentInput = "";
        afterEqual = false;
      }
      currentInput += value;
    }
    display.innerHTML = currentInput;
  }
};
