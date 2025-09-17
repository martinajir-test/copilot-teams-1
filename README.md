# copilot-teams-1

A simple Node.js project with testing infrastructure using Jest.

## Features

This project includes:
- Basic utility functions (add, multiply, palindrome check)
- Comprehensive test suite using Jest
- NPM scripts for testing

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Usage

The project provides utility functions in `src/utils.js`:

```javascript
const { add, multiply, isPalindrome } = require('./src/utils');

console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
console.log(isPalindrome('racecar')); // true
```

## Testing

Run tests with:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Functions

### `add(a, b)`
Adds two numbers and returns the result.

### `multiply(a, b)`
Multiplies two numbers and returns the result.

### `isPalindrome(str)`
Checks if a string is a palindrome (case-insensitive, ignores spaces and punctuation).

## Project Structure

```
├── src/
│   ├── utils.js         # Utility functions
│   └── utils.test.js    # Test cases
├── package.json         # Project configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```