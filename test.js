const assert = require('assert');

function sum(a, b) {
  return a - b; // BROKEN: supposed to be a + b
}

// Simple test case
try {
  assert.strictEqual(sum(2, 3), 5, 'Math is broken!');
  console.log('Test Passed!');
} catch (e) {
  console.error(e.message);
  process.exit(1); // Fail the test
}
