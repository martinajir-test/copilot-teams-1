class Calculator {
    constructor() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
    }

    updateDisplay() {
        const display = document.getElementById('display');
        display.textContent = this.currentValue;
    }

    appendNumber(number) {
        if (this.shouldResetDisplay) {
            this.currentValue = number;
            this.shouldResetDisplay = false;
        } else {
            if (this.currentValue === '0') {
                this.currentValue = number;
            } else {
                this.currentValue += number;
            }
        }
        this.updateDisplay();
    }

    appendDecimal() {
        if (this.shouldResetDisplay) {
            this.currentValue = '0.';
            this.shouldResetDisplay = false;
        } else if (!this.currentValue.includes('.')) {
            this.currentValue += '.';
        }
        this.updateDisplay();
    }

    appendOperator(operator) {
        if (this.operation !== null) {
            this.calculate();
        }
        this.previousValue = this.currentValue;
        this.operation = operator;
        this.shouldResetDisplay = true;
    }

    calculate() {
        if (this.operation === null || this.shouldResetDisplay) {
            return;
        }

        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);

        if (isNaN(prev) || isNaN(current)) {
            return;
        }

        let result;
        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero!');
                    this.clear();
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }

        this.currentValue = result.toString();
        this.operation = null;
        this.previousValue = '';
        this.shouldResetDisplay = true;
        this.updateDisplay();
    }

    clear() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.updateDisplay();
    }

    delete() {
        if (this.currentValue.length === 1 || this.currentValue === '0') {
            this.currentValue = '0';
        } else {
            this.currentValue = this.currentValue.slice(0, -1);
        }
        this.updateDisplay();
    }
}

// Create a global calculator instance
const calculator = new Calculator();
