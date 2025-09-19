const { add, multiply, isEmpty } = require('./index');

describe('Utility Functions', () => {
  describe('add', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers correctly', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add positive and negative numbers correctly', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('should handle zero correctly', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    test('should handle decimal numbers correctly', () => {
      expect(add(1.5, 2.3)).toBeCloseTo(3.8);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('should multiply negative numbers correctly', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    test('should multiply positive and negative numbers correctly', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should handle zero correctly', () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    test('should handle decimal numbers correctly', () => {
      expect(multiply(2.5, 4)).toBeCloseTo(10);
    });
  });

  describe('isEmpty', () => {
    test('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    test('should return true for whitespace-only string', () => {
      expect(isEmpty('   ')).toBe(true);
      expect(isEmpty('\t')).toBe(true);
      expect(isEmpty('\n')).toBe(true);
    });

    test('should return true for null or undefined', () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    test('should return false for non-empty string', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty('  hello  ')).toBe(false);
    });

    test('should return false for string with just special characters', () => {
      expect(isEmpty('!')).toBe(false);
      expect(isEmpty('123')).toBe(false);
    });
  });
});