let display = document.getElementById('result');
let scientificButtons = document.querySelectorAll('.scientific-btn');
let toggleButton = document.querySelector('.toggle-mode');
let isScientific = false;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSin() {
    display.value = Math.sin(eval(display.value) * Math.PI / 180); // Convertir a radianes
}

function calculateCos() {
    display.value = Math.cos(eval(display.value) * Math.PI / 180); // Convertir a radianes
}

function calculateTan() {
    display.value = Math.tan(eval(display.value) * Math.PI / 180); // Convertir a radianes
}

function calculateLog() {
    display.value = Math.log10(eval(display.value));
}

function calculateSqrt() {
    display.value = Math.sqrt(eval(display.value));
}

function calculatePower() {
    let base = eval(display.value);
    display.value = '';
    appendToDisplay('^');
    // Esperar el exponente y luego calcular en otra función o al presionar '='
    // Para simplificar, podríamos asumir que el siguiente número es el exponente
    document.addEventListener('keydown', function powerExponent(event) {
        if (!isNaN(event.key) || event.key === '.') {
            display.value = Math.pow(base, parseFloat(event.key));
            document.removeEventListener('keydown', powerExponent);
        }
    });
}

function calculatePi() {
    display.value = Math.PI;
}

function calculateFactorial() {
    function factorial(n) {
        if (n === 0) return 1;
        if (n < 0) return 'Error';
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    display.value = factorial(eval(display.value));
}

toggleButton.addEventListener('click', () => {
    isScientific = !isScientific;
    scientificButtons.forEach(button => {
        button.style.display = isScientific ? 'inline-block' : 'none';
    });
    toggleButton.textContent = isScientific ? 'Científica' : 'Básica';
    // Ajustar el ancho de la calculadora al mostrar/ocultar botones científicos
    const calculator = document.querySelector('.calculator');
    calculator.style.width = isScientific ? '500px' : '350px';
});