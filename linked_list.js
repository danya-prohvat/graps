class LinkedList {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    if (this.size === 0) {
      this.root = { value: value, next: null };
      this.size += 1;
      return true;
    }
    let node = this.root;
    while (node.next) {
      node = node.next;
    }
    let newNode = { value: value, next: null };
    node.next = newNode;
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    let node = this.root;
    console.log(this.root);
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }
}

const list = new LinkedList();
list.add(5);
list.add(3);
list.add(2);
list.add(5);
list.add(7);

list.print();
