// Simple test file
console.log('Running tests...');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✓ ${message}`);
    passed++;
  } else {
    console.log(`✗ ${message}`);
    failed++;
  }
}

// Sample tests
assert(true === true, 'Basic boolean comparison should work');
assert(1 + 1 === 2, 'Basic arithmetic should work');
assert('test'.length === 4, 'String length should work');
assert([1, 2, 3].length === 3, 'Array length should work');

console.log(`\nTest Results: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
