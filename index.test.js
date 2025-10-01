const { add, subtract } = require('./index');

describe('Math functions', () => {
  describe('add', () => {
    test('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds a positive and negative number correctly', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('adds zero correctly', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts a negative number correctly', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('subtracts zero correctly', () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });
});
