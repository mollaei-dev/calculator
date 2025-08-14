window.onload = function () {
  let display = document.getElementById("display");
  let history = document.getElementById("history");
  let buttons = document.getElementsByTagName("button");

  let currentInput = "";
  let afterEqual = false;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      let value = this.innerHTML;
      if (value === "=") {
        history.innerHTML = currentInput + " =";
        currentInput = eval(currentInput).toString();
        afterEqual = true;
      } else if (value === "C") {
        currentInput = "";
        display.innerHTML = "";
        history.innerHTML = "";
        afterEqual = false;
      } else if (value === "←") {
        currentInput = currentInput.slice(0, -1);
        display.innerHTML = currentInput;
      } else {
        if (afterEqual) {
          currentInput = "";
          afterEqual = false;
        }
        currentInput += value;
      }

      display.innerHTML = currentInput;
    };
  }
};
