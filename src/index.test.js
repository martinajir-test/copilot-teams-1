const utils = require('./index');

describe('Index exports', () => {
  test('should export math utilities', () => {
    expect(typeof utils.add).toBe('function');
    expect(typeof utils.subtract).toBe('function');
    expect(typeof utils.multiply).toBe('function');
    expect(typeof utils.divide).toBe('function');
    expect(typeof utils.factorial).toBe('function');
  });

  test('should export string utilities', () => {
    expect(typeof utils.capitalize).toBe('function');
    expect(typeof utils.reverse).toBe('function');
    expect(typeof utils.isPalindrome).toBe('function');
    expect(typeof utils.countWords).toBe('function');
    expect(typeof utils.truncate).toBe('function');
  });

  test('should have working math functions', () => {
    expect(utils.add(2, 3)).toBe(5);
    expect(utils.multiply(2, 3)).toBe(6);
  });

  test('should have working string functions', () => {
    expect(utils.capitalize('hello')).toBe('Hello');
    expect(utils.reverse('abc')).toBe('cba');
  });
});
