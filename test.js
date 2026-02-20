const assert = require('assert');

function calculateTotal(price, tax) {
  return price + tax; // BUG: Should be price + tax
}

// Test Case
try {
  console.log('Running functionality tests...');
  assert.strictEqual(calculateTotal(100, 20), 120, 'Total calculation is incorrect');
  console.log('All tests passed!');
} catch (e) {
  console.error(e.message);
  console.error(`Expected: 120`);
  console.error(`Actual: ${calculateTotal(100, 20)}`);
  process.exit(1); // Fail the test
}