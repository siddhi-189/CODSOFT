const display = document.getElementById("display");
const buttons= document.querySelectorAll("button");

let currentInput = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (value === "C"){
            currentInput = "";
            display.value = "";

        } else if (value === "DEL") {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;

        } else if (value === "="){
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }

    });
});