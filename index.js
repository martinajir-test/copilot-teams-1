#!/usr/bin/env node

/**
 * Simple greeting application that responds to "hey"
 */

function greet(message) {
    if (typeof message !== 'string') {
        return "Please provide a valid message!";
    }
    
    const lowerMessage = message.toLowerCase().trim();
    
    if (lowerMessage === 'hey' || lowerMessage === 'hey!') {
        return "Hey there! 👋 How can I help you today?";
    } else if (lowerMessage.includes('hey')) {
        return "I heard you say hey! 😊 What's up?";
    } else if (lowerMessage === 'hello' || lowerMessage === 'hi') {
        return "Hello! Nice to meet you! 🎉";
    } else {
        return `You said: "${message}". Try saying "hey" to get a special greeting!`;
    }
}

// If running as main module (command line)
if (require.main === module) {
    const args = process.argv.slice(2);
    const message = args.join(' ') || 'hey';
    console.log(greet(message));
}

// Export for testing
module.exports = { greet };