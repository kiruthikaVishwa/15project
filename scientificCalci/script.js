// Get the display element
const display = document.getElementById('display');

// Function to append numbers or operators to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append an operator (+, -, *, /)
function appendOperator(operator) {
    display.value += ` ${operator} `;
}

// Function to append a decimal point
function appendDecimal(dot) {
    // Prevent adding more than one decimal point in the same number
    if (!display.value.includes(dot)) {
        display.value += dot;
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        // Use the `eval` function to calculate the mathematical expression
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to calculate square root
function calculateSquareRoot() {
    display.value = Math.sqrt(parseFloat(display.value));
}

// Function to calculate square
function calculateSquare() {
    display.value = Math.pow(parseFloat(display.value), 2);
}

// Function to calculate exponent (x^y)
function calculateExponent() {
    display.value += ' ** ';
}

// Function to calculate sine of an angle (in radians)
function calculateSin() {
    display.value = Math.sin(parseFloat(display.value));
}

// Function to calculate cosine of an angle (in radians)
function calculateCos() {
    display.value = Math.cos(parseFloat(display.value));
}

// Function to calculate tangent of an angle (in radians)
function calculateTan() {
    display.value = Math.tan(parseFloat(display.value));
}

// Function to calculate logarithm (base 10)
function calculateLog() {
    display.value = Math.log10(parseFloat(display.value));
}

// Function to calculate factorial (n!)
function calculateFactorial() {
    let num = parseInt(display.value);
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    display.value = result;
}

// Function to calculate inverse sine (asin)
function calculateInverseSin() {
    display.value = Math.asin(parseFloat(display.value));
}

// Function to calculate inverse cosine (acos)
function calculateInverseCos() {
    display.value = Math.acos(parseFloat(display.value));
}

// Function to calculate inverse tangent (atan)
function calculateInverseTan() {
    display.value = Math.atan(parseFloat(display.value));
}

// Function to convert degrees to radians
function calculateDegToRad() {
    display.value = parseFloat(display.value) * (Math.PI / 180);
}

// Function to convert radians to degrees
function calculateRadToDeg() {
    display.value = parseFloat(display.value) * (180 / Math.PI);
}

// Function to calculate logarithm with any base
function calculateLogBase() {
    let [number, base] = display.value.split(',').map(str => parseFloat(str.trim()));
    if (base > 0 && base !== 1) {
        display.value = Math.log(number) / Math.log(base);
    } else {
        display.value = "Error";
    }
}