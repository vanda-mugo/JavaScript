import TreeNode from './TreeNode';
const tree = new TreeNode(1);


// to test the remove node method within the TreeNode
tree.addChild(15);
const node = new TreeNode(30);
tree.addChild(node);

console.log(tree);
tree.removeChild(15);
console.log(tree);
tree.removeChild(node);
console.log(tree);


// to test the Add node method in TreeNode
const TreeNode = require('./TreeNode').default;

const tree2 = new TreeNode(1);
tree2.addChild(15);
console.log(tree2);

const newChild = new TreeNode(30);
tree2.addChild(newChild);
console.log(newChild);

console.log(tree2);

const tree3 = new TreeNode(1);
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree3.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree3.children[i].addChild(randomize());
  }
}

// add third-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      tree3.children[i].children[j].addChild(randomize());
    }
  }
}

// pretty-print the tree
tree3.print();


// to test dfs
const TreeNode = require('./TreeNode');
const tree4 = new TreeNode(15);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree4.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree4.children[i].addChild(randomize());
  }
};

tree4.print();
tree4.depthFirstTraversal();


