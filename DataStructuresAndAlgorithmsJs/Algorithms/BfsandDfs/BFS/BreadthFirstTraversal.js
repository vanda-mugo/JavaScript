const testGraph = require('./testGraph.js');
const Queue = require('./Queue.js');

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const visitQueue = new Queue();
  visitQueue.enqueue(start);

  while(!visitQueue.isEmpty()){
    const current = visitQueue.dequeue();
    console.log(current.data);
    current.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitQueue.enqueue(neighbor);
      visitedVertices.push(neighbor);
    }
  });
  };

};

breadthFirstTraversal(testGraph.vertices[0]);
