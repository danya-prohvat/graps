class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) this.root = { value: value, right: null, left: null };
    else {
      let node = this.root;
      let newNode = { value: value, right: null, left: null };
      while (node) {
        if (value > node.value) {
          if (!node.right) break;

          node = node.right;
        } else {
          if (!node.left) break;

          node = node.left;
        }
      }
      if (value > node.value) node.right = newNode;
      else node.left = newNode;
    }
  }

  print(root = this.root) {
    if (!root) return true;

    console.log(root.value);
    console.log(root);

    this.print(root.left);
    this.print(root.right);
  }
}

const tree = new BinaryTree();
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);
tree.print();
