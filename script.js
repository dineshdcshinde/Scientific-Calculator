
    const display = document.getElementById('display');

    // Append value to the display
    function appendValue(value) {
      if (display.innerText === '0') {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    }

    // Clear the display
    function clearDisplay() {
      display.innerText = '0';
    }

    // Perform the calculation
    function calculate() {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = 'Error';
      }
    }

    // Trigonometric functions
    function calculateTrig(func) {
      let value = parseFloat(display.innerText);
      if (func === 'sin') display.innerText = Math.sin(value);
      if (func === 'cos') display.innerText = Math.cos(value);
      if (func === 'tan') display.innerText = Math.tan(value);
    }

    // Logarithmic calculation
    function calculateLog() {
      let value = parseFloat(display.innerText);
      display.innerText = Math.log10(value);
    }
