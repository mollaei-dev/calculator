window.onload = function () {
  let display = document.getElementById("display");
  let history = document.getElementById("history");
  let buttons = document.getElementsByTagName("button");

  let currentInput = "";

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      let value = this.innerHTML;
      if (value === "=") {
        history.innerHTML = currentInput + " =";
        currentInput = eval(currentInput).toString();
      } else currentInput += value;

      display.innerHTML = currentInput;
    };
  }
};
