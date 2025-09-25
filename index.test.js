const { add, multiply, greet } = require('./index');

describe('Math functions', () => {
  test('add should correctly add two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('multiply should correctly multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });
});

describe('String functions', () => {
  test('greet should return proper greeting', () => {
    expect(greet('World')).toBe('Hello, World!');
    expect(greet('Jest')).toBe('Hello, Jest!');
  });
});