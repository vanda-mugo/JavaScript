# JavaScript Testing with Mocha

This repository demonstrates how to use Mocha for testing JavaScript applications. It includes examples of setting up tests, writing and organizing them with `describe` and `it`, performing setup and teardown using `before`, `after`, `beforeEach`, `afterEach`, and using different `assert` functionalities.

## Table of Contents
1. [Setup](#setup)
2. [Installing Mocha](#installing-mocha)
3. [Writing Tests](#writing-tests)
   - [Describe and It](#describe-and-it)
   - [Setup and Teardown](#setup-and-teardown)
4. [Assertions](#assertions)
   - [Using `assert.ok`](#using-assertok)
   - [Using `assert.strictEqual`](#using-assertstrictEqual)
   - [Using `assert.deepEqual`](#using-assertdeepequal)
5. [Execute or Exercise Section](#execute-or-exercise-section)
6. [Verification](#verification)
7. [Teardown](#teardown)

## Setup

## 1. Initialize a Project:
   ```bash
   npm init -y
  ```

## 2. your-project/:
  ```bash
  ├── test/
  │   └── example_test.js
  ├── index.js
  └── package.json
  ```
## 3. installing mocha as a development dependency:
  ```bash
  npm install --save-dev mocha
  ```

## 4. Update the test Script: In your package.json, change the scripts section to include a test script that runs   Mocha:This allows you to run npm test from anywhere in your project directory.:
#### Code Snippet

  ```json
  {
    "scripts": {
      "test": "mocha test/**/*_test.js"
    }
  }
  ```


## writing Tests
### brief section on describe and it 
```javascript
const assert = require('assert');

describe('Math', () => {
  describe('.max', () => {
    it('returns the argument with the highest value', () => {
      assert.strictEqual(Math.max(1, 3, 2), 3);
    });

    it('returns -Infinity when no arguments are provided', () => {
      assert.strictEqual(Math.max(), -Infinity);
    });
  });

  describe('.floor', () => {
    it('returns the lower integer of the value passed', () => {
      assert.strictEqual(Math.floor(1.9), 1);
    });
  });
});
```

### brief section on setup and teardown 
```javascript
// test/setup_teardown_test.js
describe('Array', () => {
  let arr;

  before(() => {
    // Runs once before the first test in this block
    console.log('Starting Array tests');
  });

  after(() => {
    // Runs once after the last test in this block
    console.log('Array tests completed');
  });

  beforeEach(() => {
    // Runs before each test in this block
    arr = [1, 2, 3];
  });

  afterEach(() => {
    // Runs after each test in this block
    arr = [];
  });

  it('should have a length of 3', () => {
    assert.strictEqual(arr.length, 3);
  });

  it('should contain 1, 2, and 3', () => {
    assert.deepStrictEqual(arr, [1, 2, 3]);
  });
});
```

## Assertions

### using `assert.ok`
verifies the value is truthy
```javascript
assert.ok(true); // Passes
assert.ok(false); // Fails
```

### Using `assert.strictEqual`
Tests strict equality:

```javascript
assert.strictEqual(2 + 2, 4); // Passes
assert.strictEqual(2 + 2, '4'); // Fails
```

### Using `assert.deepEqual`
Checks the equality of objects and arrays:

```javascript
assert.deepEqual({ a: 1 }, { a: 1 }); // Passes
assert.deepEqual([1, 2, 3], [1, 2, 3]); // Passes
```