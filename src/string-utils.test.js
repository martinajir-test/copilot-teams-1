const { capitalize, reverse, isPalindrome, countWords, truncate } = require('./string-utils');

describe('String Utilities', () => {
  describe('capitalize', () => {
    test('should capitalize first letter of lowercase string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('should handle already capitalized string', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    test('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('should handle null or undefined', () => {
      expect(capitalize(null)).toBe(null);
      expect(capitalize(undefined)).toBe(undefined);
    });

    test('should handle single character', () => {
      expect(capitalize('a')).toBe('A');
    });
  });

  describe('reverse', () => {
    test('should reverse a string', () => {
      expect(reverse('hello')).toBe('olleh');
    });

    test('should handle single character', () => {
      expect(reverse('a')).toBe('a');
    });

    test('should handle empty string', () => {
      expect(reverse('')).toBe('');
    });

    test('should handle null or undefined', () => {
      expect(reverse(null)).toBe(null);
      expect(reverse(undefined)).toBe(undefined);
    });
  });

  describe('isPalindrome', () => {
    test('should return true for palindrome strings', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('madam')).toBe(true);
    });

    test('should return false for non-palindrome strings', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    test('should ignore case and non-alphanumeric characters', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    test('should handle empty string', () => {
      expect(isPalindrome('')).toBe(true);
    });

    test('should handle null or undefined', () => {
      expect(isPalindrome(null)).toBe(true);
      expect(isPalindrome(undefined)).toBe(true);
    });
  });

  describe('countWords', () => {
    test('should count words in a sentence', () => {
      expect(countWords('hello world')).toBe(2);
    });

    test('should handle multiple spaces', () => {
      expect(countWords('hello   world')).toBe(2);
    });

    test('should handle single word', () => {
      expect(countWords('hello')).toBe(1);
    });

    test('should handle empty string', () => {
      expect(countWords('')).toBe(0);
    });

    test('should handle only spaces', () => {
      expect(countWords('   ')).toBe(0);
    });

    test('should handle null or undefined', () => {
      expect(countWords(null)).toBe(0);
      expect(countWords(undefined)).toBe(0);
    });
  });

  describe('truncate', () => {
    test('should truncate long strings', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    test('should not truncate short strings', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    test('should handle exact length', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });

    test('should handle empty string', () => {
      expect(truncate('', 5)).toBe('');
    });

    test('should handle null or undefined', () => {
      expect(truncate(null, 5)).toBe(null);
      expect(truncate(undefined, 5)).toBe(undefined);
    });
  });
});
