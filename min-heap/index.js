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
  swap(indexOne, indexTwo) {
    ;[this.heap[indexOne], this.heap[indexTwo]] = [
      this.heap[indexTwo],
      this.heap[indexOne],
    ]
  }

  // peeks at the root element.
  peek() {
    return this.heap[1]
  }

  // insert node to the heap.
  insert(num) {
    this.heap.push(num)
    if (this.heap.length > 2) {
      if (this.heap.length === 3 && this.heap[1] > this.heap[2]) {
        this.swap(1, 2)
      }
      let i = this.heap.length - 1 // 2
      let parent = getParent(i) // 1
      while (this.heap[i] <= this.heap[parent] && i > 1) {
        this.swap(i, parent)
        i = parent
        parent = getParent(i)
      }
    }
  }
}

const minHeap = new MinHeap()
console.log(minHeap.heap)
minHeap.insert(6)
minHeap.insert(4)
minHeap.insert(5)
minHeap.insert(2)

console.log(minHeap.heap)
