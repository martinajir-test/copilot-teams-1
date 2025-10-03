# copilot-teams-1

A repository demonstrating comprehensive test coverage with utility functions.

## Features

- Math utilities (add, subtract, multiply, divide, factorial)
- String utilities (capitalize, reverse, isPalindrome, countWords, truncate)
- Comprehensive test suite with high coverage
- Jest testing framework with coverage reporting

## Installation

```bash
npm install
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests with coverage report:
```bash
npm run test:coverage
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Test Coverage

This project maintains a minimum of 80% code coverage across:
- Statements
- Branches
- Functions
- Lines

Coverage reports are generated in the `coverage/` directory after running `npm run test:coverage`.

## Usage

```javascript
const utils = require('./src/index');

// Math operations
console.log(utils.add(2, 3)); // 5
console.log(utils.factorial(5)); // 120

// String operations
console.log(utils.capitalize('hello')); // Hello
console.log(utils.isPalindrome('racecar')); // true
```