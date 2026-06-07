let display = document.getElementById("display");

let buttons = document.querySelectorAll(".buttons button");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

        let value = e.target.innerText;

        // Delete last character
        if (value === "Del") {
            display.value = display.value.slice(0, -1);
        }

        // Clear all
        else if (value === "AC") {
            display.value = "";
        }

        // Calculate result
        else if (value === "=") {
            try {
                display.value = eval(
                    display.value.replace(/÷/g, "/")
                );
            } catch {
                display.value = "Error";
            }
        }

        // Add values to display
        else {
            if (value === "÷") value = "/";

            display.value += value;
        }

    });
});
