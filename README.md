# copilot-teams-1

A simple project with test functionality, demonstrating basic utility functions and comprehensive unit testing.

## Features

This project includes:
- Basic utility functions (add, multiply, isEmpty)
- Comprehensive unit tests using Jest
- Node.js project setup with npm scripts

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running Tests

To run all tests:
```bash
npm test
```

### Using the Utility Functions

```javascript
const { add, multiply, isEmpty } = require('./index');

// Math operations
console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20

// String utilities
console.log(isEmpty('')); // true
console.log(isEmpty('hello')); // false
```

## Functions

### `add(a, b)`
Adds two numbers and returns the result.

### `multiply(a, b)`
Multiplies two numbers and returns the result.

### `isEmpty(str)`
Checks if a string is empty or contains only whitespace.