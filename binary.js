function bsTree(value){
  this.value = value
  this.children = []
}

bsTree.prototype.insert = function(value) {
  leftChild = this.children[0]
  rightChild = this.children[1]
  if (value >= this.value) {
    if (rightChild) {
      rightChild.insert(value)
    } else {
      this.children[1] = new bsTree(value);
    }
  } else {
    if (leftChild) {
      leftChild.insert(value)
    } else {
      this.children[0] = new bsTree(value);
    }
  } 
}

bsTree.prototype.contains = function (value) {
  leftChild = this.children[0]
  rightChild = this.children[1]
  if (value === this.value) {
    return this
  } else if (value >= this.value) {
    if (rightChild) {
      return rightChild.contains(value)
    } else {
      return false
    }
  } else {
    if (leftChild) {
      return leftChild.contains(value)
    } else {
      return false
    }
  }
}
 

var test = new bsTree(2)
test.insert(10)
test.insert(1)
test.insert(3)
test.insert(11)
console.log(test.contains(12))

// console.log(JSON.stringify(test));
