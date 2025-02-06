class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    addChild(child) {
      if (child instanceof TreeNode) {
        this.children.push(child);
      } else {
        this.children.push(new TreeNode(child));
      }
    }
    
    removeChild(childToRemove) {
      const length = this.children.length;
      this.children = this.children.filter(child => {
        return childToRemove instanceof TreeNode
        ? child !== childToRemove
        : child.data !== childToRemove;
      });
  
      if (length === this.children.length) {
        this.children.forEach(child => child.removeChild(childToRemove));
      }
    }
  
    print(level = 0) {
      let result = '';
      for (let i = 0; i < level; i++) {
        result += '-- ';
      }
      console.log(`${result}${this.data}`);
      this.children.forEach(child => child.print(level + 1));
    }


    depthFirstTraversal() {
        console.log(this.data);
        this.children.forEach(child => child.depthFirstTraversal());
    };

    breadthFirstTraversal(){
        let queue = [this];
        while(queue.length !== 0){
        const current = queue.shift();
        console.log(current.data);
        queue = queue.concat(current.children);

        }

    };
  };
  
  
  
  export default TreeNode;


  /**
   * 
   * 
   * dfs you use the stack data structure last in first out to manage the depth 
   function dfs(graph, start) {
  let stack = [start];
  let visited = new Set();

  while (stack.length > 0) {
    let node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      console.log(node); // Process the node
      graph[node].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      });
    }
  }
}


// in the bfs you use the queue first in first out therefore you check each child object 
function bfs(graph, start) {
  let queue = [start];
  let visited = new Set();
  visited.add(start);

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node); // Process the node
    graph[node].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    });
  }
}


   */