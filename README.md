# copilot-teams-1

A simple greeting application that responds to "hey" and other greetings! 👋

## Description

This application demonstrates a friendly greeting system that recognizes various forms of "hey" and other common greetings, responding with appropriate messages.

## Features

- Responds to "hey" with a warm greeting
- Recognizes variations like "Hey!", "hey there", etc.
- Also responds to "hello" and "hi" 
- Provides helpful feedback for other messages
- Simple command-line interface
- Includes basic tests

## Installation

```bash
# Clone the repository
git clone https://github.com/martinajir-test/copilot-teams-1.git
cd copilot-teams-1

# No dependencies to install! This is a simple Node.js app.
```

## Usage

### Command Line

```bash
# Run with default "hey" message
npm start

# Run with custom message
node index.js hey
node index.js "hey there!"
node index.js hello
node index.js "any other message"
```

### Programmatic Usage

```javascript
const { greet } = require('./index');

console.log(greet('hey'));        // "Hey there! 👋 How can I help you today?"
console.log(greet('hello'));      // "Hello! Nice to meet you! 🎉"
console.log(greet('goodbye'));    // "You said: "goodbye". Try saying "hey" to get a special greeting!"
```

## Testing

Run the test suite:

```bash
npm test
```

## Examples

```bash
$ node index.js hey
Hey there! 👋 How can I help you today?

$ node index.js "hey friend"
I heard you say hey! 😊 What's up?

$ node index.js hello
Hello! Nice to meet you! 🎉

$ node index.js goodbye
You said: "goodbye". Try saying "hey" to get a special greeting!
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT