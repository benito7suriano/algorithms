const getLeftChild = (i) => i * 2
const getRightChild = (i) => i * 2 + 1
const getParent = (i) => Math.floor(i / 2)

class MinHeap {
  // initialize heap as an array.
  // 'null' at position 0.
  constructor() {
    this.heap = [null]
  }

  // swap two elements in an array.
  // n: number of elements that are being swapped.
  // O(n) time complexity.
  // O(n) space complexity, one variable for each element swapped.
  swap(indexOne, indexTwo) {
    ;[this.heap[indexOne], this.heap[indexTwo]] = [
      this.heap[indexTwo],
      this.heap[indexOne],
    ]
  }

  // peeks at the root element.
  // O(1) time complexity.
  peek() {
    return this.heap[1]
  }

  // insert node to the heap.
  // n: number of nodes.
  // O(log(n)): we need one swap at each level of the tree.
  // Total # of swaps would be equal to height of heap tree.
  // Side note: if inserting an element takes log(n) time, building the whole tree takes O(n*log(n)).
  // There's an algorithm that can build a heap in O(n) time: https://www.growingwiththeweb.com/data-structures/binary-heap/build-heap-proof/
  // The height of balanced complete tree with 'n' number of nodes is log(n).
  // O(n) space: the array to store the heap is 'n' spaces big.
  insert(num) {
    this.heap.push(num)
    if (this.heap.length > 2) {
      if (this.heap.length === 3 && this.heap[1] > this.heap[2]) {
        this.swap(1, 2)
      }
      let i = this.heap.length - 1
      let parent = getParent(i)
      while (this.heap[i] <= this.heap[parent] && i > 1) {
        this.swap(i, parent)
        i = parent
        parent = getParent(i)
      }
    }
  }

  // extract node from the heap.
  // n: number of nodes.
  // O(log(n)): we need one swap at each level of the tree.
  // Total # of swaps would be equal to height of heap tree.
  // The height of balanced complete tree with 'n' number of nodes is log(n).
  // O(n) space: the array to store the heap is 'n' spaces big.
  extract() {
    let smallest = this.peek() || null
    this.heap[1] = this.heap[this.heap.length - 1]
    this.heap.splice(this.heap.length - 1, 1)
    let i = 1
    let left = getLeftChild(i)
    let right = getRightChild(i)
    while (this.heap[left] && this.heap[right]) {
      if (this.heap[left] <= this.heap[right]) {
        this.swap(i, left)
        i = left
      } else if (this.heap[right] <= this.heap[left]) {
        this.swap(i, right)
        i = right
      }
      left = getLeftChild(i)
      right = getRightChild(i)
    }
    return smallest
  }
}
