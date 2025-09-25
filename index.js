/**
 * Simple utility functions for testing
 */

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = {
  add,
  multiply,
  greet
};