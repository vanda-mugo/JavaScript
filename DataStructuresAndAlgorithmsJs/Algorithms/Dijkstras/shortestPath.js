const testGraph = require('./testGraph.js');
const dijkstras = require('./dijkstras.js');

const shortestPathBetween = (graph, startingVertex, targetVertex) => {
  const { previous, distances } = dijkstras(graph, startingVertex);
  const distance = distances[targetVertex.data];
  const path = [];
  let vertex = targetVertex;
  while(vertex !== null){
    path.unshift(vertex);
    vertex = previous[vertex.data];
  }
  return {distance, path};
};

// Retrieve shortest path between vertices A and G
const a = testGraph.getVertexByValue('A');
const g = testGraph.getVertexByValue('G');
const results = shortestPathBetween(testGraph, a, g);
console.log(results);

module.exports = shortestPathBetween;
