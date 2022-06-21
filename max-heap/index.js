const leftChild = i => i * 2 + 1
const rightChild = i => i * 2 + 2
const parent = i => Math.floor(i / 2)

// initialize heap as an empty array.
class MaxHeap {
  constructor() {
    this.heap = [null]
  }

  // swaps two elements in an array.
  swap (indexOne, indexTwo) {
    [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]]
  }

  // peeks at the root element.
  peek () {
    return this.heap[1]
  }

  // insert node to the heap.
  insert (num) {
    this.heap.push(num)
    if(this.heap.length > 2) {
      let idx = this.heap.length - 1
      while(this.heap[idx] > this.heap[parent(idx)]) {
        if(idx >= 1) {
          this.swap(idx, parent(idx))
          if(parent(idx) > 1) {
            idx = parent(idx)
          } else {
            break
          }
        }
      }
    }
  }
}

const maxheap = new MaxHeap()
maxheap.insert(1)
maxheap.insert(3)
maxheap.insert(4)
maxheap.insert(10)
console.log(maxheap.heap)
