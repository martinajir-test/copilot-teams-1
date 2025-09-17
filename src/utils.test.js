const { add, multiply, isPalindrome } = require('./utils');

describe('Utils', () => {
  describe('add function', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('should add two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('multiply function', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -2)).toBe(-10);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
    });
  });

  describe('isPalindrome function', () => {
    test('should return true for simple palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('level')).toBe(true);
    });

    test('should return false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
      expect(isPalindrome('world')).toBe(false);
    });

    test('should handle mixed case', () => {
      expect(isPalindrome('RaceCar')).toBe(true);
      expect(isPalindrome('Level')).toBe(true);
    });

    test('should handle phrases with spaces and punctuation', () => {
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
      expect(isPalindrome('race a car')).toBe(false);
    });

    test('should handle empty string', () => {
      expect(isPalindrome('')).toBe(true);
    });

    test('should handle single character', () => {
      expect(isPalindrome('a')).toBe(true);
    });
  });
});