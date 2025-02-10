console.log = function() {};
const { expect } = require('chai');
const rewire = require('rewire');
const sinon = require('sinon');
console.log = sinon.spy();

describe('', function() {
  it('' , function() {
    let shortestPath;
    try {
        const moduleImport = rewire('../shortestPath.js');
      	shortestPath = moduleImport.__get__('shortestPathBetween');
    } catch(e) {
      expect(true, 'We encountered an error when running your code. Try checking the output for errors.').to.equal(false);
	}
	
	const expectedDistance = -38;
	const expectedPath = ['A', 'D', 'E', 'G'];
	
	const results = console.log.args[0][0];
	const { distance, path } = results;

	expect(distance === expectedDistance, `Expected the distance from the starting to target vertices ${expectedDistance} but found ${distance}. `).to.equal(true);

	expect(path.length === expectedPath.length, 'Make sure the path from the starting to target vertices is built by tracing through the previous vertices.').to.equal(true)
	expectedPath.forEach((vertex, index) => {
		expect(path[index].data === vertex, `Expected to see the vertex at index ${index} to be ${vertex} but found ${path[index].data}. `).to.equal(true);
	})
  })
});