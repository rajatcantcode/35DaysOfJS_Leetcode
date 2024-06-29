class Calculator {
  constructor(value = 0) {
    // Default starting value of 0
    this.result = value;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result = Math.pow(this.result, value); // Use Math.pow
    return this;
  }

  getResult() {
    return this.result;
  }
}

const cal = new Calculator(10); // Start with 10
const cal2 = new Calculator(); // Default is 0
const result = cal.add(5).subtract(7).getResult(); // 10 + 5 - 7 = 8
const result2 = cal2.add(5).subtract(7).getResult(); // 0 + 5 - 7 = -2
console.log(result, result2); // Output: 8,-2
