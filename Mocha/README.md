# JavaScript Testing with Mocha

This repository demonstrates how to use Mocha for testing JavaScript applications. It includes examples of setting up tests, writing and organizing them with `describe` and `it`, performing setup and teardown using `before`, `after`, `beforeEach`, `afterEach`, and using different `assert` functionalities.

## Table of Contents
1. [Setup](#setup)
2. [Initialize a project](#Initialize-a-project)
   - [Installing mocha as a development dependency](#Installing-mocha-as-a-development-dependency)
   - [Update the test Script: In your package.json](#Update-the-test-Script:-In-your-package.json:)
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

## 4. Update the test Script: In your package.json:

change the scripts section to include a test script that runs   Mocha:This allows you to run npm test from anywhere in your project directory.:
#### json

  ```json
  {
    "scripts": {
      "test": "mocha test/**/*_test.js"
    }
  }
  ```


## writing Tests
### describe and it 
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

### Setup and Teardown 
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
describe('assert.ok', () => {
  it('should pass when the value is truthy', () => {
    assert.ok(true);
  });

  it('should fail when the value is falsy', () => {
    assert.ok(0, 'Value is not truthy');
  });
});

```

### Using `assert.strictEqual`
Tests strict equality:

```javascript
describe('assert.strictEqual', () => {
  it('should pass when the values are strictly equal', () => {
    assert.strictEqual(1, 1);
  });

  it('should fail when the values are not strictly equal', () => {
    assert.strictEqual(1, '1', 'Values are not strictly equal');
  });
});

```

### Using `assert.deepEqual`
Checks the equality of objects and arrays:

```javascript
describe('assert.deepEqual', () => {
  it('should pass when the objects are deeply equal', () => {
    assert.deepEqual({a: 1}, {a: 1});
  });

  it('should fail when the objects are not deeply equal', () => {
    assert.deepEqual({a: 1}, {a: 2}, 'Objects are not deeply equal');
  });
});
```

### Execute or Exercise Section

```bash 
npm test
```

### Verification 

Verification involves checking the test results to ensure that all tests have passed and that the application behaves as expected.

    Review Test Output: Check the console output for any failed tests.

    Debug Failures: Investigate and fix any failed test cases.

    Re-run Tests: Ensure all tests pass after making necessary changes.

### Teardown

Teardown tasks, defined using afterEach and after, ensure your environment is cleaned up after tests run.

```javascript
afterEach(() => {
  // Cleanup code after each test
});

after(() => {
  // Cleanup code after all tests
});
```