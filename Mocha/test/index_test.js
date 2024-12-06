const assert = require('assert');
const fs = require('fs');
const Rooster = require('../index');

describe('appendFileSync', () => {
  const path = './message.txt';
  
  it('writes a string to text file at given path name', () => {

    // Setup
    const str = 'Hello Node.js';
    
    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.ok(contents.toString() === str);

    // Teardown: delete path
    fs.unlinkSync(path);

  });
});



describe('Rooster', () => {
    describe('.announceDawn' , () => {
      it('returns a rooster call', () => {
        //setup 
        const expected = 'cock-a-doodle-doo!';
  
        //exercise 
        const actual = Rooster.announceDawn();
  
        // verification
        assert.strictEqual(expected, actual, 'The strings are not equal by strict rules.');
      });
  
    });
    describe('.timeAtDawn', () => {
      it('returns its argument as a string', () => {
      // setup
      const expected = '5';
  
      //exercise
      const actual = Rooster.timeAtDawn(5);
  
      //verify
      assert.strictEqual(expected, actual, "expected string output of 5");
        
      });
      it('throws an error if passed a number less than 0', () => {
        assert.throws( () => {
          Rooster.timeAtDawn(-1);
        }, RangeError);
      });
      it('throws an error if passed a number greater than 23', () => {
        assert.throws( () => {
          Rooster.timeAtDawn(24);
        }, RangeError);
      });
    });
  });
