let display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

let buttons = document.querySelectorAll(".buttons button");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let value = e.target.innerText; 

    if (value === "C") {
      return;
    }
    else if (value === "=") {
      try {
        display.value = eval(display.value
          .replace("÷", "/")
          .replace("×", "*")
          .replace("−", "-")
        );
      } catch {
        display.value = "Error";
      }
    }
    else {
      if (value === "÷") value = "/";
      if (value === "×") value = "*";
      if (value === "−") value = "-";

      display.value += value;
    }
  });
});
