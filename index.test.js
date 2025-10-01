const { add, subtract, multiply, divide } = require('./index');

describe('Math operations', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('should add two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should subtract negative from positive', () => {
      expect(subtract(5, -3)).toBe(8);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should divide negative by positive', () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });
});
