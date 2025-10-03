const { add, subtract, multiply, divide, factorial } = require('./math-utils');

describe('Math Utilities', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should subtract negative from positive', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('should handle zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(2, -3)).toBe(-6);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    test('should handle zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(6, -3)).toBe(-2);
    });

    test('should handle decimal results', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('factorial', () => {
    test('should calculate factorial of 0', () => {
      expect(factorial(0)).toBe(1);
    });

    test('should calculate factorial of 1', () => {
      expect(factorial(1)).toBe(1);
    });

    test('should calculate factorial of positive numbers', () => {
      expect(factorial(5)).toBe(120);
      expect(factorial(3)).toBe(6);
    });

    test('should throw error for negative numbers', () => {
      expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
    });
  });
});
