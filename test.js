const { greet } = require('./index');

/**
 * Simple test runner
 */
function runTests() {
    const tests = [
        { input: 'hey', expected: "Hey there! 👋 How can I help you today?" },
        { input: 'hey!', expected: "Hey there! 👋 How can I help you today?" },
        { input: 'Hey', expected: "Hey there! 👋 How can I help you today?" },
        { input: 'hello', expected: "Hello! Nice to meet you! 🎉" },
        { input: 'hi', expected: "Hello! Nice to meet you! 🎉" },
        { input: 'hey there friend', expected: "I heard you say hey! 😊 What's up?" },
        { input: 'goodbye', expected: 'You said: "goodbye". Try saying "hey" to get a special greeting!' },
        { input: '', expected: 'You said: "". Try saying "hey" to get a special greeting!' }
    ];
    
    let passed = 0;
    let failed = 0;
    
    console.log('🧪 Running tests...\n');
    
    tests.forEach((test, index) => {
        const result = greet(test.input);
        const success = result === test.expected;
        
        if (success) {
            console.log(`✅ Test ${index + 1}: PASSED`);
            console.log(`   Input: "${test.input}"`);
            console.log(`   Output: "${result}"`);
            passed++;
        } else {
            console.log(`❌ Test ${index + 1}: FAILED`);
            console.log(`   Input: "${test.input}"`);
            console.log(`   Expected: "${test.expected}"`);
            console.log(`   Got: "${result}"`);
            failed++;
        }
        console.log('');
    });
    
    console.log(`📊 Test Results: ${passed} passed, ${failed} failed`);
    
    if (failed === 0) {
        console.log('🎉 All tests passed!');
        process.exit(0);
    } else {
        console.log('💥 Some tests failed!');
        process.exit(1);
    }
}

// Run tests if this file is executed directly
if (require.main === module) {
    runTests();
}